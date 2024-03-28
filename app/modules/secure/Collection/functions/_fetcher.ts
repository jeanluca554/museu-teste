// import { api, filterControl, getScopedParams } from "arkyn_utils";
// import { generateURL } from "~/server/utils";
// import { schemas } from "../_schemas";

type FetcherProps = {
  request: Request;
  token: string;
  account_id: string;
};

export async function fetcher(props: FetcherProps) {
  // const { account_id, request, token } = props;
  // const { user_fetcher } = schemas;

  // const filterParams = getScopedParams(request);
  // const filters = filterControl(
  //   ["search", "strDate", "endDate", "limit", "page"],
  //   filterParams
  // );

  // const userURL = generateURL(`/${account_id}/user${filters}`, request);

  // const fetcherResponse = await api.FETCHER({
  //   users: [user_fetcher, userURL, { token, cached: userURL + token }],
  // });

  const fetcherResponse = {
    collection: {
      data: [
        {
          code: "123456789",
          name: "Obra de arte 1",
          description: "Descrição obra 1",
          image:
            "https://s3-alpha-sig.figma.com/img/c3a7/4742/4a4282314d1a04843c4973a28e606dc2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IjNPvU6H-1thGw00NhImt1XAtMGCREkPJvmZqPNQLVifn7WBL5b4uM898EVcXFdVA~G1psGJ2JNWFsgZ7FlEMHnsGnX3vXAbq2JqKRmrA0Hbia6zMGaP2gJPN5w6HllsFy6~z4dvWhgw6toWXxXSV8N~ox-2AK-VK5cflPXEBpFgyy9WMuHIyWuPHwacMFKmecxOLm0ksouAOAMn0R-BOhbaSNwijlR8EU8czfJixbFWa6pnu9sDM8GqzJ7MRKOczKI0Gz~khcPAEDzIjdUtZqZZNalXuvTmHLU8esKFLXlhxPKBPi5OvNqzqxxBv6mQgRtusf2RUo2Lv4X3Mx2GSg__",
          audio: "https://audio.com",
          qrcode_image:
            "https://lh3.googleusercontent.com/pw/AP1GczMvUMeLt1IpaIYmtQHW2FnrmsCyU3Rs8prVMdP51jtbi5EDfuUYMO-1oQUTwng8r1uAo1K7PhpO2kH0eO7iaec97smBwCTFnI_6WOoMQ0CWLxvpDo-aMlzuplsSbkV1EDetVFB07n5TFLqIja390-E=w823-h824-s-no-gm?authuser=0",
          qrcode_link: "https://photos.app.goo.gl/uLeC7utPDTth1EBu9",
        },
      ],
      meta: {
        totalItems: 1,
      },
    },
  };

  return fetcherResponse;
}
