import React from "react";

const ProfitCard: React.FC<{
  profit: number;
  previousProfit: number;
  isIncrease: boolean;
}> = ({ profit, previousProfit, isIncrease }) => {
  const percentageChange = ((profit - previousProfit) / previousProfit) * 100;
  const formattedPercentage = percentageChange.toFixed(2);

  return (
    <article className="flex flex-col gap-4 rounded-lg border border-none bg-background p-6">
      <div
        className={`inline-flex gap-2 self-end rounded p-1 ${
          isIncrease ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={
              isIncrease
                ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                : "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
            }
          />
        </svg>

        <span className="text-xs font-medium"> {formattedPercentage}% </span>
      </div>

      <div>
        <strong className="block text-sm font-medium "> Price </strong>

        <p>
          <span className="text-2xl font-medium text-green-600">
            {" "}
            ${profit.toFixed(2)}{" "}
          </span>

          <span className="text-xs "> from ${previousProfit.toFixed(2)} </span>
        </p>
      </div>
    </article>
  );
};

const PriceStat: React.FC = () => {
  return (
    <div>
      <ProfitCard profit={4} previousProfit={2.01} isIncrease={true} />
    </div>
  );
};

export default PriceStat;
