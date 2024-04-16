import Image from "next/image";
import Avatar from "/public/subvert-avatar@2x.png";

export const CatchPhrase = () => {
  return (
    <div className="flex flex-col items-center text-center pt-20 pb-16 space-y-5">
      <Image src={Avatar} alt="Avatar" width={80} height={80} />
      <p className="text-2xl">
        “Pulse is worth every penny because it empowers business owners <br className="hidden lg:inline-block" /> with
        critical financial insight and knowledge.”
      </p>
      <p className="text-green-dark uppercase font-bold text-xs tracking-widest">Subvert Marketing, Inc.</p>
    </div>
  );
};
 