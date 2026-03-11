import Image from "next/image";

import {
  pricingCompareGroups,
  pricingPlanOrder,
  type PricingCompareGroup,
  type PricingPlanName,
} from "@/app/pricing/pricing-data";

type PricingCompareTableProps = {
  groups?: readonly PricingCompareGroup[];
};

function AvailabilityLabel({
  featureLabel,
  planName,
  isIncluded,
}: {
  featureLabel: string;
  planName: PricingPlanName;
  isIncluded: boolean;
}) {
  const label = isIncluded
    ? `${featureLabel} is included in the ${planName} plan`
    : `${featureLabel} is not included in the ${planName} plan`;

  return (
    <>
      {isIncluded ? (
        <span aria-hidden="true">
          <Image
            src="/check.svg"
            alt=""
            aria-hidden="true"
            width={18}
            height={15}
            style={{ width: 18, height: 15 }}
            unoptimized
          />
        </span>
      ) : null}
      <span className="sr-only">{label}</span>
    </>
  );
}

export function PricingCompareTable({
  groups = pricingCompareGroups,
}: PricingCompareTableProps) {
  return (
    <section
      aria-labelledby="pricing-compare-heading"
      className="mx-auto w-full max-w-182.5"
    >
      <div>
        <h2
          id="pricing-compare-heading"
          className="text-center text-preset-2 uppercase"
        >
          COMPARE
        </h2>

        <div className="mt-10 md:hidden">
          <div className="space-y-10">
            {groups.map((group, groupIndex) => (
              <section
                key={group.title}
                aria-labelledby={`pricing-compare-group-${groupIndex}`}
              >
                <h3
                  id={`pricing-compare-group-${groupIndex}`}
                  className="border-b border-neutral-950 pb-6 text-preset-7 uppercase tracking-[0.125em] text-neutral-950"
                >
                  {group.title}
                </h3>

                <div className="space-y-6 pt-6">
                  {group.rows.map((row) => (
                    <article
                      key={row.label}
                      className="border-b border-neutral-300 pb-6 last:border-b-0 last:pb-0"
                    >
                      <h4 className="text-preset-7 uppercase tracking-[0.125em] text-neutral-950">
                        {row.label}
                      </h4>

                      <dl className="mt-5 grid grid-cols-3 gap-x-4 gap-y-3">
                        {pricingPlanOrder.map((planName) => {
                          const isIncluded = row.availability[planName];

                          return (
                            <div key={planName} className="space-y-2.5">
                              <dt className="text-preset-7 uppercase text-neutral-950/50">
                                {planName}
                              </dt>
                              <dd className="flex min-h-6 items-center">
                                <AvailabilityLabel
                                  featureLabel={row.label}
                                  planName={planName}
                                  isIncluded={isIncluded}
                                />
                              </dd>
                            </div>
                          );
                        })}
                      </dl>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <div className="mt-12 hidden md:block">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <caption className="sr-only">
                Pricing plan comparison table showing feature availability for
                Basic, Pro, and Business plans.
              </caption>
              <thead>
                <tr className="border-b border-neutral-950">
                  <th
                    scope="col"
                    className="px-0 py-6 text-left text-preset-7 uppercase tracking-[0.125em] text-neutral-950"
                  >
                    The Features
                  </th>
                  {pricingPlanOrder.map((planName) => (
                    <th
                      key={planName}
                      scope="col"
                      className="px-6 py-6 text-center text-preset-7 uppercase tracking-[0.125em] text-neutral-950"
                    >
                      {planName}
                    </th>
                  ))}
                </tr>
              </thead>
              {groups.map((group) => (
                <tbody key={group.title}>
                  {group.rows.map((row) => (
                    <tr key={row.label} className="border-b border-neutral-300">
                      <th
                        scope="row"
                        className="px-0 py-6 pr-8 text-left text-preset-7 uppercase tracking-[0.125em] text-neutral-950"
                      >
                        {row.label}
                      </th>
                      {pricingPlanOrder.map((planName) => {
                        const isIncluded = row.availability[planName];

                        return (
                          <td
                            key={planName}
                            className="px-6 py-6 text-center align-middle"
                          >
                            <div className="flex items-center justify-center">
                              <AvailabilityLabel
                                featureLabel={row.label}
                                planName={planName}
                                isIncluded={isIncluded}
                              />
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
