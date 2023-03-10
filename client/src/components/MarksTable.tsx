import { useNavigate } from 'react-router-dom';

const MarksTable = ({ data }: any) => {
  const navigate = useNavigate();

  return (
    <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>
      {data &&
        data.map((item: any) => (
          <div
            key={item._id}
            onClick={() =>
              navigate(`/dashboard/teacher/view-students/${item.studentId._id}`)
            }
            className='m-3 cursor-pointer space-y-2 divide-y divide-zinc-300/20 rounded-md border border-zinc-300/20 p-2 hover:shadow-md hover:shadow-zinc-300/20'
          >
            <div className='flex justify-between'>
              <div className='space-y-2'>
                <div className='text-2xl font-medium'>
                  {item.studentId.sName}
                </div>
                <div className='font-light'>{item.studentId.sId}</div>
              </div>
              <div className='mt-2 mr-2'>
                <img
                  src={item.studentId.sImage}
                  alt='Profile Image'
                  className='h-10 w-10 rounded-full'
                />
              </div>
            </div>
            <div>
              {item.subjectMarks.length !== 0 ? (
                item.subjectMarks.map((sub: any) => (
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
          </div>
        ))}
    </div>
  );
};
export default MarksTable;
