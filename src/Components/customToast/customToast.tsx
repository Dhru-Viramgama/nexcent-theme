import { toast } from 'react-hot-toast';

export const showCustomToast = ({ message, type, duration = 3000, position = "" }: any) => {
    toast.custom((t) => (
        <div
            className={`${t.visible ? 'animate-enter' : 'animate-leave'
                } max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
            <div className="flex-shrink-0 pt-0.5">
                {/* Display the appropriate icon based on the toast type */}
                {/* {type === 'success' && toast.success.icon} */}
                {/* {type === 'error' && toast.error.icon} */}
                {/* {type === 'loading' && toast.loading.icon} */}
            </div>
            <div className="flex-1 w-0 p-4">
                <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">{message}</p>
                </div>
            </div>
        </div>
    ), {
        duration,
        position,
    });
};
