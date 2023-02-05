import { useGetStudentMarkQuery } from '../../app/slices/studentApiSlice';

const SViewMarks = () => {
  const { data, isLoading, error } = useGetStudentMarkQuery({});

  let content = isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Some error occured...</div>
  ) : (
    data && (
      <div>
        <h1 className='text-center text-xl md:text-xl lg:text-4xl'>
          Student Marks
        </h1>

        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:text-3xl'>
          {data.marks.subjectMarks.map((mark: any) => (
            <div
              key={mark._id}
              className='my-1 flex flex-col items-center justify-center '
            >
              <h1>
                {mark.subject} : {mark.marks}
              </h1>
            </div>
          ))}
        </div>
      </div>
    )
  );

  return content;
};
export default SViewMarks;
