import { useGetStudentsQuery } from '../../app/slices/adminApiSlice';
import ListTable from '../../components/ListTable';

interface StudentData {
  _id: string;
  sName: string;
  sEmail: string;
  sId: string;
}

const AdminViewStudents = () => {
  const { data, error, isLoading } = useGetStudentsQuery('studentsList', {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });

  let content =
    isLoading && !data ? (
      <div>Loading...</div>
    ) : error ? (
      <div>Some error occured...</div>
    ) : (
      data &&
      data?.students.map((student: StudentData) => (
        <ListTable
          key={student._id}
          name={student.sName}
          email={student.sEmail}
          id={student.sId}
        />
      ))
    );

  return content;
};
export default AdminViewStudents;
