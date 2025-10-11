import Image from "next/image";

type SkillCardProps = {
    image_path: string;
    title: string;
};

export default function SkillCard({image_path, title} : SkillCardProps) {
    return (
        <div className="flex flex-col w-25 h-20 justify-center items-center p-3 bg-radial from-blue-600 to-blue-900 border-2 border-gray-700 rounded-lg text-white">
            <Image
                src={image_path}
                width={32}
                height={32}
                alt={title + " icon"}
            />
            <p>{title}</p>
        </div>
    );
}
