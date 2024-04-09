import Image from "next/image";
import Avatar from "/public/subvert-avatar@2x.png";

export const CatchPhrase = () => {
  return (
    <div className="flex flex-col items-center text-center py-16 space-y-5">
      <Image src={Avatar} alt="Avatar" width={80} height={80} />
      <p>
        “Pulse is worth every penny because it empowers business owners with
        critical financial insight and knowledge.”
      </p>
      <p className="text-green-dark uppercase font-bold text-sm">Subvert Marketing, Inc.</p>
    </div>
  );
};
 