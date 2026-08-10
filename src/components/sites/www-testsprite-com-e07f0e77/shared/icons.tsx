import type { SVGProps } from "react";

export function TestSpriteLogo({
  className,
}: {
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-1 ${className ?? ""}`}>
      <svg
        aria-hidden="true"
        className="h-6 w-6 shrink-0"
        fill="none"
        viewBox="0 0 182 182"
      >
        <path
          d="M91.7527 157.618C82.305 157.618 72.8827 155.158 64.4422 150.223L40.9695 136.453C36.405 133.788 34.875 127.923 37.5397 123.41C40.2045 118.845 46.0185 117.315 50.583 119.98L74.0557 133.75C84.957 140.138 98.4975 140.138 109.399 133.75L155.618 105.751C160.144 103.086 165.996 104.616 168.661 109.181C171.326 113.745 169.796 119.559 165.231 122.224L119.012 150.223C110.61 155.158 101.162 157.618 91.7017 157.618H91.7527Z"
          fill="#478d54"
        />
        <path
          d="M142.651 91.8024L40.7782 27.6189C32.0445 22.3659 22.5967 22.1619 14.5515 26.6882C6.51899 31.1762 1.75049 39.3361 1.75049 48.5416V101.225C1.75049 108.734 5.71574 115.645 12.2182 119.406C18.963 123.371 26.001 122.198 33.141 119.164L87.2265 85.1086L69.3255 73.8376L23.961 102.602C22.8262 103.367 21.8572 102.92 20.8882 101.186V48.5416C20.8882 45.3541 23.0302 43.8114 23.961 43.2886C25.6185 42.4854 27.837 42.4854 29.8515 43.3396L132.54 107.931C139.068 112.036 145.711 107.804 145.711 104.935C148.541 100.485 147.164 94.5946 142.727 91.7641L142.651 91.8024Z"
          fill="currentColor"
        />
        <path
          d="M181.117 48.5799C181.117 39.4126 176.311 31.2144 168.278 26.7264C160.284 22.2384 150.785 22.4042 142.829 27.2874L96.2536 56.8546L114.104 68.1256L152.927 43.5181C155.668 41.8606 158.104 42.8679 158.983 43.3906C159.914 43.9134 162.056 45.4561 162.056 48.6054V93.0774C162.056 98.3304 166.34 102.614 171.593 102.614C176.846 102.614 181.13 98.3304 181.13 93.0774V48.5799H181.117Z"
          fill="currentColor"
        />
      </svg>
      <span className="text-[19px] leading-none font-bold tracking-[-1px] italic">
        TestSprite
      </span>
    </span>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        d="m5 12 4 4L19 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
