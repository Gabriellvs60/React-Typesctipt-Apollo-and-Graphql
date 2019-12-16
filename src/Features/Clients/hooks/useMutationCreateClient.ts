import { useCreateClientMutation, CreateClientMutationVariables} from "../../../api";
import { Toast } from "../../../commom/config/swal";
import { ErrorHandler } from "../../../commom/utils/ErrorHandler";

export default function useCreateClient() {
  
  const [mutate, data] = useCreateClientMutation({
    refetchQueries: ['allClients']
  });

  async function createClient(input: CreateClientMutationVariables) {
      try {
        await mutate({
          variables: input
        });
         Toast.fire({
           text: "Cliente adicionado com sucesso.",
          icon: "success"
         });
      } catch (error) {
        console.log(error)
        ErrorHandler.handle(error, "Erro ao adicionar cliente.");
      }
  }
  return { createClient, data };
}
