import { Link } from "react-router-dom"

export default function Logo() {
  return (
    <div className="py-0.5">
        <Link to="/" className="w-[52px] h-[52px] rounded-full flex justify-center items-center hover:bg-[#eff3f41a] transition-colors">
            <svg width={30} height={30}
                viewBox="0 0 24 24" aria-hidden="true" className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp">
                <path fill="#fff" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
        </Link>
    </div>
  )
}
