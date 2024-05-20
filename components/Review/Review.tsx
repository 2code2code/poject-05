import React from "react";

interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    name: "John McCulling",
    date: "August 28, 2021",
    rating: 5,
    text: "ZeusChain has exceeded our expectations with their robust blockchain solutions. Their support and expertise are unmatched. Highly impressed!.",
  },
  {
    name: "Kate Berg",
    date: "July 21, 2021",
    rating: 5,
    text: "ZeusChain's platform is incredibly efficient and secure. Their team made the integration process seamless. We're thrilled with the results!",
  },
  {
    name: "Greg Jackson",
    date: "March 16, 2021",
    rating: 5,
    text: "ZeusChain's blockchain solutions have transformed our operations. Their smart contracts and cross-chain integration are top-notch. Highly recommended!",
  },
];

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CustomerReviews: React.FC = () => {
  return (
    <div className="bg-base py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-md px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-base-800 md:mb-8 lg:text-3xl xl:mb-12">
          Customer Reviews
        </h2>

        <div className="mb-4 flex items-center justify-between border-t border-b py-4">
          <div className="flex flex-col gap-0.5">
            <span className="block font-bold text-left">Total</span>

            <div className="-ml-1 flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} filled={true} />
              ))}
            </div>

            <span className="block text-sm text-base-500">
              Based on 10k+ reviews
            </span>
          </div>

          <a
            href="#"
            className="inline-block rounded-lg border bg-base px-4 py-2 text-center text-sm font-semibold text-base-500 outline-none ring-indigo-300 transition duration-100 hover:bg-base-100 focus-visible:ring active:bg-base-200 md:px-8 md:py-3 md:text-base"
          >
            Write a review
          </a>
        </div>

        <div className="divide-y">
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col gap-3 py-4 md:py-8">
              <div>
                <span className="block text-sm font-bold text-left">
                  {review.name}
                </span>
                <span className="block text-sm text-base-500 text-left">
                  {review.date}
                </span>
              </div>

              <div className="-ml-1 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < review.rating} />
                ))}
              </div>

              <p className="text-base-600">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
