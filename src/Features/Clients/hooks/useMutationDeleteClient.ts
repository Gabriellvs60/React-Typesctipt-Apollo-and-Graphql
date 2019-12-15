import { useDeleteClientMutation } from "../../../api";
import { ErrorHandler } from "../../../commom/utils/ErrorHandler";

interface Props {
  refetch: any;
}

export default function useAllClients({ refetch }: Props) {
  const [mutate, data] = useDeleteClientMutation();

  function toggleClient(clientId: string) {
    return mutate({
      variables: {
        id: clientId
      }
    });
  }

  async function deleteClient(id: string) {
      try {
        await toggleClient(id);
        refetch();
      } catch (error) {
        ErrorHandler.handle(error, "Erro ao remover cliente.");
      }
    }
  

  return { toggleClient, data, deleteClient };
}
