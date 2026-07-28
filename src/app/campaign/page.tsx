import { Metadata } from 'next';
import { CampaignHero } from '@/components/campaign/CampaignHero';
import { WhyBook } from '@/components/campaign/WhyBook';
import { PopularTests } from '@/components/campaign/PopularTests';
import { CampaignPackages } from '@/components/campaign/CampaignPackages';
import { FAQ } from '@/components/home/FAQ';

export const metadata: Metadata = {
  title: 'Full Body Health Checkups | Raj Scans',
  description: 'Book comprehensive full body health checkups with Raj Scans. Get accurate results, advanced testing, and home collection.',
};

export default function CampaignPage() {
  return (
    <>
      <CampaignHero />
      <WhyBook />
      <PopularTests />
      <CampaignPackages />
      <FAQ />
    </>
  );
}
