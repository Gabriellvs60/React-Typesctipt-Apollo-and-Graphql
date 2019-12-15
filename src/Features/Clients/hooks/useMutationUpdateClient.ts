import { useUpdateClientMutation, UpdateClientMutationVariables} from "../../../api";

import { ErrorHandler } from "../../../commom/utils/ErrorHandler";

export default function useUpdateClient() {
  
  const [mutate, data] = useUpdateClientMutation({

    refetchQueries: ['allClients']

    // UPDATE WITHOUT REFETCH, PUSHING ITENS ON MEMORY
    // update: (store, { data }) => {
    //   const currentClients = store.readQuery<AllClientsQuery>({ query: AllClientsDocument, variables: { pagination: { page: 1, limit: 10 } } })
    //   currentClients?.allClients.result.push(data?.createClient || {} as any)

    //   store.writeQuery<AllClientsQuery>({
    //     query: AllClientsDocument,
    //     data: currentClients || {} as any
    //   })
    // }
    
  });

  async function updateClient(input: UpdateClientMutationVariables) {
      try {
        await mutate({
          variables: input
        });
        // Toast.fire({
        //   text: "Cliente adicionado com sucesso.",
        //   icon: "success"
        // });
        console.log("addsuccess")
      } catch (error) {
        ErrorHandler.handle(error, "Erro ao Atualizar cliente.");
      }
  }

  return { updateClient, data };
}
