import { CONFIG } from '@/global-config';
import { CompanyLogo } from '../_components';
import { CompanyInfoModal } from '../_components/company-info-modal';

import type { Company } from '../_types';

type Props = {
  companies: Company[];
  selectedCompanyId: number;
};

export default function CompanyLogos({ companies, selectedCompanyId }: Props) {
  const uniqueCompanyName = new Set<string>()
  const uniqueCompany: Company[] = []

  companies.forEach(company => {
    if (!uniqueCompanyName.has(company.name)) {
      uniqueCompany.push(company)
      uniqueCompanyName.add(company.name)
    } 
  })

  const selectedCompany = companies?.find(
    (company: Company) => company.Id === selectedCompanyId,
  );

  return (
    <article className="mx-auto flex flex-col justify-center bg-black bg-linear-orange-gray py-24 lg:py-32">
      <div className="container relative mx-auto xl:max-w-screen-xl">
        <section className="px-0 py-10 text-white sm:px-10">
          <h2 className="mb-10 text-center text-3xl font-semibold md:text-4xl">
            บริษัทที่เข้าร่วม
            <span className="visuallyhidden">กิจกรรม CE smart career {CONFIG.date.years}</span>
          </h2>

          <div className="grid grid-cols-2 gap-6 px-4 sm:grid-cols-3 sm:px-6 md:grid-cols-4 lg:px-8">
            {uniqueCompany?.map((company: Company, index: number) => (
              <CompanyLogo
                key={index}
                name={company?.name}
                logo={company?.logo}
                companyId={company?.Id}
              />
            ))}
          </div>
        </section>
      </div>
      {selectedCompany && (
        <CompanyInfoModal
          name={selectedCompany.name}
          logo={selectedCompany.logo}
          url={selectedCompany.url}
          description={selectedCompany.description}
          contact={selectedCompany.contact}
        />
      )}
    </article>
  );
}
