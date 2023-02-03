import { Link, useParams } from 'react-router-dom';
import { useGetStudentMarksByIdQuery } from '../../app/slices/teacherApiSlice';

const StudentMarks = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGetStudentMarksByIdQuery(id);

  let content = isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Some error occured...</div>
  ) : (
    data && (
      <div className='mx-auto max-w-4xl space-y-16'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-bold tracking-wide lg:text-6xl '>
            {data.marks.studentId.sName}
          </h1>
          <img
            src={data.marks.studentId.sImage}
            alt=''
            className='h-20 w-20 rounded-full lg:h-36 lg:w-36'
          />
        </div>

        <div className='lg:text-2xl'>
          {data.marks.subjectMarks.length !== 0 ? (
            data.marks.subjectMarks.map((sub: any) => (
              <div key={sub._id} className='my-2 flex space-x-2'>
                <div>
                  {sub.subject} - {sub.marks}
                </div>
              </div>
            ))
          ) : (
            <div className='my-2 '>No marks yet</div>
          )}
        </div>

        <div className='flex items-center justify-start space-x-24 lg:text-2xl'>
          <button className='rounded-md bg-violet-600 px-4 py-2 text-white'>
            Add Marks
          </button>

          <Link to='/dashboard/teacher/view-students'>
            <button className='rounded-md bg-violet-600 px-4 py-2 text-white'>
              Back
            </button>
          </Link>
        </div>
      </div>
    )
  );
  return content;
};
export default StudentMarks;
