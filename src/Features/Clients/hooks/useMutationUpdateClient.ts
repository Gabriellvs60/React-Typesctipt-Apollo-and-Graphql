import { useUpdateClientMutation, UpdateClientMutationVariables } from "../../../api";
import { Toast } from "../../../commom/config/swal";
import { ErrorHandler } from "../../../commom/utils/ErrorHandler";

export default function useUpdateClient() {

  const [mutate, data] = useUpdateClientMutation({

    refetchQueries: ['allClients']
    
  });

  async function updateClient(input: UpdateClientMutationVariables) {
    try {
      await mutate({
        variables: input
      });
      Toast.fire({
        text: "Cliente atualizado com sucesso.",
        icon: "success"
      });
      console.log("addsuccess")
    } catch (error) {
      ErrorHandler.handle(error, "Erro ao atualizar cliente.");
    }
  }

  return { updateClient, data };
}
