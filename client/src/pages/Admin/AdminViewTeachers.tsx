import { useGetTeachersQuery } from '../../app/slices/adminApiSlice';
import ListTable from '../../components/ListTable';

interface Props {
  data: any;
  error: any;
  isLoading: boolean;
}

const AdminViewTeachers = () => {
  const { data, error, isLoading } = useGetTeachersQuery<Props>(
    'teachersList',
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
      data && <ListTable data={data?.teachers} />
    );

  return content;
};
export default AdminViewTeachers;
