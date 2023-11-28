import modals from "~/routes/modals"
import { useModal } from "~/store/modal/hooks"

export default function Modal() {

    const modal = useModal()
    const currentModal = modals.find(m => m.name === modal.name)

    return (
        <div className="fixed inset-0  bg-[#5b7083]/40 flex items-center justify-center z-20">
            <div className="max-w-[600px] max-h-[90vh] bg-black overflow-auto rounded-2xl">
                {currentModal && <currentModal.element/>}
            </div>
        </div>
    )
}