import Head from 'next/head';
import { useRouter } from 'next/router';
import { formatCurrencyString } from 'use-shopping-cart';

export default function LightspeedProduct({ item }) {
  const router = useRouter();
  const productDescriptionLong = () => ({ __html: item.ItemECommerce ? item.ItemECommerce.longDescription : '' });
  const productDescriptionShort = () => ({ __html: item.ItemECommerce ? item.ItemECommerce.shortDescription : '' });
  const price = parseFloat(item.Prices?.ItemPrice[0]?.amount).toFixed(2).replace('.', '');

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <>
      <Head>
        <title className="uppercase">{`${item.description}`}</title>
        <meta name="description" content={`${productDescriptionShort()}`} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={`${item.description.replace(' ', ',')}`} />
        <meta property="og:title" content={`${item.description}`} />
        <meta property="og:description" content={`${productDescriptionShort()}`} />
        <meta
          property="og:image"
          content={`${item.Images.Image.baseImageURL}/w_600/${item.Images.Image.publicID}.webp`}
          alt={`${item.description}`}
        />
        <meta property="og:url" content={`https://shootingsuppliesltd.co.uk${router.asPath}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta charSet="UTF-8" />
      </Head>
      <main>
        <div className="xl:mx-72 xl:my-12 flex flex-col xl:flex-row justify-center">
          <div className="w-3/4 mx-auto xl:mx-0 xl:w-1/2 p-2">
            <img
              src={`${item.Images.Image.baseImageURL}/w_600/${item.Images.Image.publicID}.webp`}
              alt={`${item.description}`}
              className="object-scale-down"
            />
          </div>
          <div className="p-6 xl:w-1/2 p-2 bg-gray-50 rounded-lg">
            <h1 className="text-4xl font-bold">{item.description}</h1>
            <p>SKU: {item.customSku}</p>
            <p className="mt-2 font-bold text-4xl uppercase">
              {formatCurrencyString({
                value: price,
                currency: 'GBP',
              })}
            </p>
            {item.ItemShops ? (
              item.ItemShops.ItemShop[0].qoh > 0 ? (
                <p className="mt-4 text-green-500 font-bold text-lg">In Stock</p>
              ) : (
                <p className="mt-4 text-red-500 font-bold text-lg">
                  Out of Stock - Check Back or Call for Availability
                </p>
              )
            ) : null}
            <p className="mt-8" dangerouslySetInnerHTML={productDescriptionShort()} />
            <a href="#fulldescription" className="hidden xl:block">
              <p className="mt-6 text-ssblue hover:text-ssorange">Full Description..</p>
            </a>
          </div>
        </div>
        <hr className="xl:hidden my-8" />
        <div id="fulldescription" className="mx-0 xl:mx-72 mt-8 mb-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="font-bold text-2xl">Full Description</h2>
          <div dangerouslySetInnerHTML={productDescriptionLong()} className="mt-4 prose" />
        </div>
        <div className="xl:mx-72 mx-4">
          <h3 className="my-8 text-2xl font-black uppercase">
            Please Contact Us to Purchase this item or for more information
          </h3>
        </div>
        <div className="xl:mx-72 flex mx-4 my-8">
          <a
            href="tel:01527831261"
            className="flex items-center justify-center h-10 w-24 mr-4 bg-ssblue hover:bg-green-600 text-lg text-white font-bold uppercase rounded"
          >
            Call Us
          </a>
          <Mailto
            email="info@shootingsuppliesltd.co.uk"
            subject={`ITEM ENQUIRY: ${item.description} / ${item.customSku}`}
          >
            <p className="flex items-center justify-center h-10 w-24 mr-4 bg-ssblue hover:bg-green-600 text-lg text-white font-bold uppercase rounded">
              Email
            </p>
          </Mailto>
        </div>
      </main>
    </>
  );
}
