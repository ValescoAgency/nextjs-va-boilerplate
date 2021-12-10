import { DefaultSeoProps } from 'next-seo';

export default function Footer(SEO: DefaultSeoProps) {
  return (
    <footer className="border-t border-gray-300 text-center py-8 text-sm">
      © {new Date().getFullYear()} {SEO.title}. Powered with{' '}
      <span className="text-red-500" role="img" aria-label="Love">
        &#9829;
      </span>{' '}
      by{' '}
      <a href="https://valesco.agency">
        <span
          className="inline-block transform translate-y-2 text-va"
          aria-hidden="true"
          role="img"
          aria-label="ValescoAgency Logo"
        >
          <svg
            className="hover:animate-wiggle fill-current w-6 h-6 mr-2"
            viewBox="0 0 198 186"
            fill="#cb9866"
          >
            <path
              id="vVector"
              d="M66.11 185.65L0 70.81H71.55L66.11 80.27H16.38L66.11 166.67L119.93 73.18H130.86L66.11 185.65Z"
            />
            <path
              id="aVector"
              d="M131.25 0L197.36 114.84H125.81L131.25 105.38H180.99L131.25 18.98L77.43 112.48H66.5L131.25 0Z"
            />
          </svg>
        </span>
        <span className="text-va font-bold">ValescoAgency</span>
      </a>
    </footer>
  );
}
