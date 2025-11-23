"use client"

type Props = {
    onOk: () => void
    onCancel: () => void
}

const DeleteDialog = (props: Props) => {
    return (
        <div className="flex items-center justify-center w-full h-full bg-white/10 absolute left-1/2 -translate-x-1/2 backdrop-blur-md">
            <div className="flex flex-col w-[300px] h-[200px] bg-blue-100 items-center justify-center rounded-md">
                <h2 className="text-xl">Are you sure want to delete?</h2>
                <div className="flex items-center justify-center gap-8 mt-6">
                    <button onClick={() => props.onOk()} className="px-4 rounded-md cursor-pointer">Yes</button>
                    <button onClick={() => props.onCancel()} className="px-4 rounded-md bg-blue-500 text-white cursor-pointer">No</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteDialog