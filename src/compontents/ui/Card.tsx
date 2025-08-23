import { DocIcon } from "../../icons/DocIcon";
import { ShareIcon } from "../../icons/shareicon";
import { TrashIcon } from "../../icons/TrashIcon";
import { VideoIcon } from "../../icons/VideoIcon";

interface CardProps {
    title: string,
    link: string,
    type: "Twitter" | "Youtube" | "Notes",

}
export function Cards({ title, link, type }: CardProps) {
    return (
        <div className="p-6 bg-white rounded-md shadow-md border-gray-200 border max-w-96 min-h-48 min-w-72">
            <div className="flex justify-between">
                <div className="flex items-center text-md font-medium ">
                    {type === "Youtube" && <VideoIcon size="md" />}
                    {type === "Twitter" && <DocIcon size="md" />}
                    {type === "Notes" && <DocIcon size="md" />}
                    
                    <div className="pl-4">{title}</div>
                </div>

                <div className="flex items-center">
                    <div className="pr-5">
                        <ShareIcon size="md" />
                    </div>
                    <div>
                        <TrashIcon size="md" />
                    </div>
                </div>
            </div>

            <div className="p-2">
                {type === "Youtube" && (
                    <iframe
                        className="w-full"
                        src={link.replace("watch", "embed")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write;
                               encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                )}

                {type === "Twitter" && (
                    <blockquote className="twitter-tweet">
                        <a href={link.replace("x.com", "twitter.com")}></a>
                    </blockquote>
                )}

                {type === "Notes" && (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        Open Notes
                    </a>
                )}
            </div>
        </div>
    );
}