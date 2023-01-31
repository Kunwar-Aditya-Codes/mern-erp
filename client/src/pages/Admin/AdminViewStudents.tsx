import { useGetStudentsQuery } from '../../app/slices/adminApiSlice';
import ListTable from '../../components/ListTable';

interface Props {
  data: any;
  error: any;
  isLoading: boolean;
}

const AdminViewStudents = () => {
  const { data, error, isLoading } = useGetStudentsQuery<Props>(
    'studentsList',
    {
      pollingInterval: 60000,
      refetchOnReconnect: true,
    }
  );

  let content =
    isLoading && !data ? (
      <div>Loading...</div>
    ) : error ? (
      <div>Some error occured...</div>
    ) : (
      data && <ListTable data={data.students} />
    );

  return content;
};
export default AdminViewStudents;
