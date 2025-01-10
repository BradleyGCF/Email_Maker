// Aquí van las llamadas de servicios de la app
// Ejemplo:
// import { Services } from "@/services"
// import type { OrderBy, Pagination, Search } from "@/types"
// import Moralis from "moralis-v1"
// import { formatUsers, formatUserSession } from "../adapters"

// export const getAllUsers = async ({
//   q,
//   orderBy,
//   page,
// }: Pagination & Search & OrderBy) => {
//   try {
//     const response = await Moralis.Cloud.run(Services.users.getAll, {
//       q,
//       orderBy,
//       page,
//     })

//     if (response?.status === "error") {
//       return {
//         error: response?.errorDetails?.message as string,
//       }
//     }

//     const data = formatUsers(response)

//     return {
//       data,
//     }
//   } catch (error) {
//     console.error(error)
//     return {
//       error: "Ha ocurrido un error",
//     }
//   }
// }
