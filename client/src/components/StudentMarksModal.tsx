import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useAddStudentMarksMutation } from '../app/slices/teacherApiSlice';
import toast from 'react-hot-toast';

const StudentMarksModal = ({ setModal, studentId, subjectMarks }: any) => {
  const [studentMarks, setStudentMarks] = useState<any>(
    subjectMarks.length > 0
      ? subjectMarks.map((sub: any) => ({
          subject: sub.subject,
          marks: sub.marks,
        }))
      : [
          {
            subject: '',
            marks: 0,
          },
        ]
  );

  const handleSubject = (e: any, index: number) => {
    const newStudentMarks = [...studentMarks];
    newStudentMarks[index].subject = e.target.value;
    setStudentMarks(newStudentMarks);
  };

  const handleMarks = (e: any, index: number) => {
    const newStudentMarks = [...studentMarks];
    newStudentMarks[index].marks = e.target.value;
    setStudentMarks(newStudentMarks);
  };

  const [addStudentMarks, { isLoading }] = useAddStudentMarksMutation();

  const handleAdd = async () => {
    toast.loading('Adding marks...', {
      id: 'add-marks',
    });

    const res: any = await addStudentMarks({
      studentId,
      subjectMarks: studentMarks,
    });

    if (res.error) {
      toast.error(res.error.message, {
        id: 'add-marks',
      });
    }

    toast.success('Marks added successfully', {
      id: 'add-marks',
    });

    setModal(false);
  };

  const handleUpdate = async () => {
    console.log(studentMarks);
  };

  return (
    <div className='absolute left-0  right-0 bottom-0 mb-4  h-full bg-black/95'>
      <XMarkIcon
        className='absolute right-4 top-4 h-5 w-5 cursor-pointer text-white'
        onClick={() => setModal(false)}
      />

      <div className='mx-auto flex h-full max-w-lg flex-col items-center justify-center  p-4'>
        {studentMarks.map((mark: any, index: number) => (
          <div key={index} className='w-full'>
            <div
              key={index}
              className='mb-4 flex flex-col items-center  space-y-2 md:flex-row md:justify-between md:space-x-4 md:space-y-0 '
            >
              <input
                type='text'
                placeholder='Subject Name'
                value={mark.subject}
                className='rounded-md border border-violet-600 bg-transparent p-2 text-white'
                onChange={(e) => handleSubject(e, index)}
              />
              <input
                type='text'
                placeholder='Marks'
                value={mark.marks}
                className='rounded-md border border-violet-600 bg-transparent p-2 text-white'
                onChange={(e) => handleMarks(e, index)}
              />
            </div>

            <div className='flex items-center justify-center md:justify-start'>
              {index === studentMarks.length - 1 && studentMarks.length < 4 && (
                <button
                  className='rounded-md bg-violet-600  bg-transparent p-2  text-white'
                  onClick={() => {
                    setStudentMarks([
                      ...studentMarks,
                      {
                        subject: '',
                        marks: 0,
                      },
                    ]);
                  }}
                >
                  Add More
                </button>
              )}
            </div>
          </div>
        ))}

        <div className='flex w-full flex-col items-center  '>
          <button
            onClick={handleAdd}
            className='mt-6 w-full  rounded-md bg-transparent bg-violet-600 px-4 py-2 text-white '
          >
            Add
          </button>
          <button
            onClick={handleUpdate}
            className='mt-6 w-full  rounded-md border-2 border-violet-600 bg-transparent px-4 py-2 text-white '
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
export default StudentMarksModal;
