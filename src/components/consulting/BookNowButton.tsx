import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface BookNowButtonProps {
  slug: string
  text?: string
}

export const BookNowButton = ({ text="Book Now", slug }: BookNowButtonProps) => {

  useEffect(()=>{
	  (async function () {
		  const cal = await getCalApi({"namespace":slug});
		  cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#4645D1"},"dark":{"cal-brand":"#4645D1"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])

  return (
    <>
    <button className="btn btn-lg w-full" data-cal-namespace={slug} data-cal-link={`underlost/${slug}`} data-cal-config='{"layout":"month_view"}'>
      {text}
    </button>;
    </>
  )
}