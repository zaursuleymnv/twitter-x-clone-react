import Button from "../../../../components/button";

export default function Premium() {
    return (
        <section 
            className="bg-[color:var(--background-secondary)] rounded-2xl mb-4 py-3 px-4 border border-[color:var(--background-secondary)] flex flex-col gap-2.5"
            >
                <h6 className="text-xl font-extrabold">Subscribe to Premium</h6>
                <p className="text-[15px] font-bold leading-6">
                    Subscribe to unlock new features and if eligible, receive a share of ads revenue.
                </p>
                <div className="self-start">
                    <Button>Subscribe</Button>
                </div>
        </section>
    )
}