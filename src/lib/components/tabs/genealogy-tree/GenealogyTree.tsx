import { useCallback, useContext, useEffect, useMemo } from "react";
import { HomeContext } from "@/app/home/page";
import ReactFlow, {
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";
import "reactflow/dist/base.css";
// import "./genealogyStyling.css";
import dagre from "dagre";
import { Card, CardContent } from "@mui/material";
import GeneNode from "./CustomeNodes";

const nodeWidth = 350;
const nodeHeight = 900;

const nodeTypes = { "gene-node": GeneNode };

export default function GenealogyTree() {
  const { filteredCreatures, relations } = useContext(HomeContext);
  const reactFlowInstance = useReactFlow();

  const graphableCreatures = useMemo(() => {
    return filteredCreatures.map((creature) => ({
      id: creature.dinoId,
      position: { x: 0, y: 0 },
      type: "gene-node",
      data: {
        creature: creature,
        label: creature.name,
        value: creature.dinoId,
      },
    }));
  }, [filteredCreatures]);

  // From https://reactflow.dev/examples/layout/dagre
  const getLayoutedElements = useCallback(
    (nodes, edges, direction = "TB", align = "UR") => {
      const newGraph = new dagre.graphlib.Graph();
      newGraph.setDefaultEdgeLabel(() => ({}));

      newGraph.setGraph({ rankdir: direction, align, ranker: "tight-tree" });

      nodes.forEach((node) => {
        newGraph.setNode(node.id, {
          ...node,
          width: nodeWidth,
          height: nodeHeight,
        });
      });

      edges.forEach((edge) => {
        edge.style = {
          strokeWidth: 2,
        };
        edge.type = "smoothstep";

        newGraph.setEdge(edge.source, edge.target);
      });

      dagre.layout(newGraph);

      nodes.forEach((node) => {
        const nodeWithPosition = newGraph.node(node.id);
        node.targetPosition = "top";
        node.sourcePosition = "bottom";

        // We are shifting the dagre node position (anchor=center center) to the top left
        // so it matches the React Flow node anchor point (top left).
        node.position = {
          x: nodeWithPosition.x - nodeWidth / 2,
          y: nodeWithPosition.y - nodeHeight / 2,
        };
      });

      return { nodes, edges };
    },
    []
  );

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    const layoutElems = getLayoutedElements(graphableCreatures, relations);
    setNodes(layoutElems.nodes);
    setEdges(layoutElems.edges);
  }, [getLayoutedElements, graphableCreatures, relations]);

  const handleNodesChange = useCallback(
    (e) => {
      onNodesChange(e);
      setTimeout(reactFlowInstance.fitView);
    },
    [onNodesChange, reactFlowInstance]
  );

  return (
    // <Card style={{ backgroundColor: "#70b2db" }}>
    <Card style={{ backgroundColor: "#e5dfe8" }}>
      <CardContent style={{ height: "800px", padding: "0" }}>
        <ReactFlow
          className="pl-4"
          contentEditable={false}
          nodes={nodes}
          edges={edges}
          onNodesChange={handleNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          minZoom={0.2}
          nodeTypes={nodeTypes}
          onlyRenderVisibleElements
          maxZoom={10.0}
        >
          <MiniMap
            style={{
              height: 120,
            }}
            zoomable
            pannable
          />
          <Controls />
        </ReactFlow>
      </CardContent>
    </Card>
  );
}
