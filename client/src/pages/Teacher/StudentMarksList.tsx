import { useGetStudentsMarksQuery } from '../../app/slices/teacherApiSlice';
import MarksTable from '../../components/MarksTable';

const StudentMarksList = () => {
  const { data, isLoading, error } = useGetStudentsMarksQuery({});

  let content = isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Some error occured...</div>
  ) : (
    data && <MarksTable data={data.marks} />
  );

  return content;
};
export default StudentMarksList;
