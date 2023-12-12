export default function Photo({photos}) {

        switch (photos.length) {
            case 1:
                return (
                    <div className="mt-3">
                        <img src={photos[0]} className="max-h-[510px] object-cover border border-[color:var(--background-third)] rounded-2xl" alt="" />
                    </div>
                )
            case 2:
                return (
                    <div className="mt-3 grid grid-cols-2 gap-0.5 h-[288px] border border-[color:var(--background-third)] rounded-2xl overflow-hidden">
                        <img src={photos[0]} className="h-full w-full object-cover" alt="" />
                        <img src={photos[1]} className="h-full w-full object-cover" alt="" />
                    </div>
                )
            case 3:
                return (
                    <div className="mt-3 grid grid-cols-2 gap-0.5 h-[288px] border border-[color:var(--background-third)] rounded-2xl overflow-hidden">
                        <img src={photos[0]} className="h-full w-full object-cover" alt="" />
                        <div className="flex flex-col gap-0.5 h-full">
                            <div className="flex-shrink-0 flex-1 relative">
                                <img src={photos[1]} className="h-full w-full flex-shrink-0 absolute inset-0 object-cover" alt="" />
                            </div>
                            <div className="flex-shrink-0 flex-1 relative">
                                <img src={photos[2]} className="h-full w-full flex-shrink-0 absolute inset-0 object-cover" alt="" />
                            </div>
                        </div>
                    </div>
                )
            case 4:
                return (
                    <div className="mt-3 grid grid-cols-2 gap-0.5 h-[286px] border border-[color:var(--background-third)] rounded-2xl overflow-hidden">
                        <img src={photos[0]} className="h-[141px] w-full object-cover" alt="" />
                        <img src={photos[1]} className="h-[141px] w-full object-cover" alt="" />
                        <img src={photos[2]} className="h-[141px] w-full object-cover" alt="" />
                        <img src={photos[3]} className="h-[141px] w-full object-cover" alt="" />
                    </div>
                )
        }
}