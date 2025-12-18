export type CommandLineOptions = {
    SERVER_PASSWORD?: string;
    ARK_ADMIN_PASSWORD: string;
    SERVER_PORT: number;
    SERVER_MAP: string;
    CLUSTER_ID?: string;
    SESSION_NAME: string;
    SERVER_PVE: boolean;
    BATTLE_EYE: boolean;
    MAX_PLAYERS: number;
    FORCE_RESPAWN_DINOS: boolean;
    MAP_MOD_ID: number;
    MOD_IDS: number[];
}



/**was it down?
 * 
 * from CT species-log
 * 
 {
 	"species":
 	{
 		"species": [
 			{
 				"blueprintpath": "/Game/PrimalEarth/Dinos/Raptor/Raptor_Character_BP.Raptor_Character_BP_C",
 				"primalname": "Raptor_Character_BP_C",
 				"label": "Raptor",
 				"dossier":
 				{
 					"blueprintpath": "/Game/PrimalEarth/CoreBlueprints/DinoEntries/DinoEntry_Raptor.DinoEntry_Raptor_C",
 					"primalname": "DinoEntry_Raptor_C",
 					"label": "Raptor"
 				}
 			},
 			{
 				"blueprintpath": "/Game/PrimalEarth/Dinos/Ankylo/Ankylo_Character_BP.Ankylo_Character_BP_C",
 				"primalname": "Ankylo_Character_BP_C",
 				"label": "Ankylosaurus",
 				"dossier":
 				{
 					"blueprintpath": "/Game/PrimalEarth/CoreBlueprints/DinoEntries/DinoEntry_Anky.DinoEntry_Anky_C",
 					"primalname": "DinoEntry_Anky_C",
 					"label": "Ankylosaurus"
 				}
 			}
 		]
 	}
 }
 */