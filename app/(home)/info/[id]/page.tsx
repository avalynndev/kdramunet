import Image from "next/image";
import DetailsContainer from "@/components/containers/details";
import EpisodeContainer from "@/components/containers/episode";
import { getDramaInfo } from "@/lib/fetch";

export default async function DramaInfo({ params }: any) {
  const id = decodeURIComponent(params.id);
  const info = await getDramaInfo(id);
  console.log(info.episodes,id);

  return (
    <div key={id}>
      {info && (
        <>
          <DetailsContainer data={info} />
          <EpisodeContainer data={info.episodes} id={id} />
        </>
      )}
    </div>
  );
}
