import { useForm } from 'react-hook-form';
import { MdOutlineCloudUpload } from 'react-icons/md';
import AddOwner from '../component/AddOwner';

const AddNewRestaurantPage = () => {
  const { register, handleSubmit, control } = useForm();
  const onSubmitFunc = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="pb-10">
        <div onClick={() => console.log('Back Button')} className="my-10 cursor-pointer">
          <p className="text-sm font-bold text-gray5"> {'<'} Back </p>
        </div>

        <div className="rounded-md border-0">
          <form onSubmit={handleSubmit(onSubmitFunc)}>
            <div className="mb-8">
              <h1 className="mb-3 text-xs font-semibold text-gray5 sm:text-base">Owner details</h1>
              <AddOwner register={register} control={control} />
            </div>

            <div className="mb-8">
              <h1 className="mb-3 text-xs font-semibold text-gray5 sm:text-base">
                Restaurant details
              </h1>
              <div className="flex flex-col">
                <div>
                  <input
                    className="mb-3 w-full rounded-md border-0 bg-white py-1 pl-5 text-sm outline-none sm:py-2 "
                    name="restaurantName"
                    type="text"
                    ref={register}
                    placeholder="Restaurant name"
                  />
                </div>

                <div>
                  <input
                    className="w-full rounded-md border-0 bg-white py-1 pl-5 text-sm outline-none sm:py-2 "
                    name="address"
                    type="text"
                    ref={register}
                    placeholder="Address"
                  />
                </div>
              </div>
            </div>

            <div>
              <h1 className="mb-3 text-xs font-semibold text-gray5 sm:text-base">Uploads</h1>
              <div className="flex cursor-pointer flex-col items-center justify-center rounded-md border-0 bg-white py-5">
                <MdOutlineCloudUpload className="text-gray51 text-xl" />
                <p className="text-gray51 text-center text-xs sm:text-base">
                  Drag and drop images logo or photos of the restaurent
                </p>
                <p className="text-gray51 text-xs sm:text-base">(PNG, JPEG are allowed: 20 MB) </p>
              </div>
            </div>

            <div className="mt-10 flex justify-end">
              <button
                type="submit"
                className="bg-blue91 rounded-md border-0 px-14 py-2 text-base font-semibold text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewRestaurantPage;
