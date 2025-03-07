import { ScrollBaseAnimation } from "./components/TextMarquee";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div
        style={{
          maxWidth: "960px",
          margin: "auto",

          padding: "2rem",
        }}
      >
        <Image
          className="brand-white"
          src="/assets/brand.svg"
          width="250"
          alt="image"
          height="90"
        />
        <div style={{ marginTop: "1rem" }} className="font-condensed text-3xl">
          [MANIFIESTO]
        </div>

        <div
          style={{ marginTop: "0.5rem", marginBottom: "5rem" }}
          className="font-serif text-3xl"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            faucibus risus quis elit ultricies iaculis. Aenean pulvinar tempor
            augue, at ultricies lectus vehicula nec. Cras pellentesque felis
            elit, ac euismod ex molestie nec. Vestibulum lobortis mi sed mauris
            faucibus, posuere placerat odio sagittis. Cras ipsum nibh, placerat
            nec pharetra non, tincidunt sit amet ligula. Fusce non fermentum
            augue. Quisque ut tempus quam. Nulla id metus a dolor interdum
            tincidunt. Etiam ornare velit ligula, ac placerat lacus malesuada
            quis. Curabitur faucibus eleifend posuere. Quisque viverra, libero
            non interdum dignissim, est elit consectetur nulla, vel faucibus
            turpis odio eget ante. Duis lectus nulla, fermentum fermentum
            aliquam eget, scelerisque a mauris. Vivamus eleifend egestas nisl at
            fringilla. In hac habitasse platea dictumst.
          </p>
          <p>
            In dignissim diam iaculis, sagittis neque eget, dapibus leo.
            Praesent sed ligula et leo pellentesque cursus et nec sapien.
            Vestibulum ut nibh eros. Donec bibendum ullamcorper elementum.
            Vestibulum congue eget tellus aliquam aliquet. Vestibulum ac enim ut
            elit congue consectetur. Sed porta, lectus ac condimentum dictum,
            erat dolor mattis leo, ut volutpat libero elit eu nisi. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Proin quis lacus ex.
            Curabitur congue efficitur urna et scelerisque. Proin ac ante vel
            sem interdum fermentum. Nunc venenatis magna in pulvinar suscipit.
            Nulla cursus, ex vitae sagittis auctor, velit nunc sollicitudin ex,
            a placerat nulla purus vel diam. Suspendisse tempus nisi at justo
            pellentesque, eu hendrerit risus accumsan. Praesent facilisis
            finibus sem at euismod. Nunc ornare quam pulvinar justo euismod,
            quis faucibus mauris euismod. Vivamus fringilla sagittis neque a
            pretium. In luctus nisi nec accumsan placerat.
          </p>
          <p
            style={{ textAlign: "right", display: "block", marginTop: "2rem" }}
          >
            Atte. El Consejo B.O.N.D
          </p>
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "black",
          color: "yellow",
        }}
      >
        <ScrollBaseAnimation
          baseVelocity={1}
          scrollDependent={false}
          clasname=""
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <>PROXIMAMENTE</>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              id="Interface-Essential-Alert-Caution--Streamline-Pixel"
              height={30}
              width={30}
              style={{ marginLeft: "50px" }}
            >
              <desc>
                {
                  "Interface Essential Alert Caution Streamline Icon: https://streamlinehq.com"
                }
              </desc>
              <title>{"interface-essential-alert-caution"}</title>
              <g>
                <path
                  d="M22.2825 19.42875h1.1475v2.2874999999999996h-1.1475Z"
                  fill="yellow"
                  strokeWidth={0.75}
                />
                <path
                  d="M21.142500000000002 17.14125h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
                  fill="yellow"
                  strokeWidth={0.75}
                />
                <path
                  d="M1.71 21.71625h20.572499999999998v1.1400000000000001H1.71Z"
                  fill="yellow"
                  strokeWidth={0.75}
                />
                <path
                  d="M20.0025 14.85375h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
                  fill="yellow"
                  strokeWidth={0.75}
                />
                <path
                  d="M18.855 12.57375h1.1475v2.2800000000000002h-1.1475Z"
                  fill="yellow"
                  strokeWidth={0.75}
                />
                <path
                  d="M17.715 10.286249999999999h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
                  fill="yellow"
                  strokeWidth={0.75}
                />
                <path
                  d="M16.5675 7.998749999999999h1.1475v2.2874999999999996h-1.1475Z"
                  fill="yellow"
                  strokeWidth={0.75}
                />
                <path
                  d="M15.4275 5.71125h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
                  fill="yellow"
                  strokeWidth={0.75}
                />
                <path
                  d="M14.287500000000001 3.4312500000000004h1.1400000000000001v2.2800000000000002h-1.1400000000000001Z"
                  fill="yellow"
                  strokeWidth={0.75}
                />
                <path
                  d="M13.14 2.28375h1.1475v1.1475h-1.1475Z"
                  fill="yellow"
                  strokeWidth={0.75}
                />
                <path
                  d="m10.852500000000001 19.42875 2.2874999999999996 0 0 -1.1400000000000001 1.1475 0 0 -2.2874999999999996 -1.1475 0 0 -1.1475 -2.2874999999999996 0 0 1.1475 -1.1400000000000001 0 0 2.2874999999999996 1.1400000000000001 0 0 1.1400000000000001z"
                  fill="yellow"
                  strokeWidth={0.75}
                />
                <path
                  d="M10.852500000000001 6.85875h2.2874999999999996v6.855h-2.2874999999999996Z"
                  fill="yellow"
                  strokeWidth={0.75}
                />
                <path
                  d="M10.852500000000001 1.1437499999999998h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
                  fill="yellow"
                  strokeWidth={0.75}
                />
                <path
                  d="M9.712499999999999 2.28375h1.1400000000000001v1.1475h-1.1400000000000001Z"
                  fill="yellow"
                  strokeWidth={0.75}
                />
                <path
                  d="M8.5725 3.4312500000000004h1.1400000000000001v2.2800000000000002h-1.1400000000000001Z"
                  fill="yellow"
                  strokeWidth={0.75}
                />
                <path
                  d="M7.425000000000001 5.71125h1.1475v2.2874999999999996H7.425000000000001Z"
                  fill="yellow"
                  strokeWidth={0.75}
                />
                <path
                  d="M6.285 7.998749999999999H7.425000000000001v2.2874999999999996H6.285Z"
                  fill="yellow"
                  strokeWidth={0.75}
                />
                <path
                  d="M5.1450000000000005 10.286249999999999h1.1400000000000001v2.2874999999999996H5.1450000000000005Z"
                  fill="yellow"
                  strokeWidth={0.75}
                />
                <path
                  d="M3.9975 12.57375h1.1475v2.2800000000000002H3.9975Z"
                  fill="yellow"
                  strokeWidth={0.75}
                />
                <path
                  d="M2.8575 14.85375h1.1400000000000001v2.2874999999999996H2.8575Z"
                  fill="yellow"
                  strokeWidth={0.75}
                />
                <path
                  d="M1.71 17.14125h1.1475v2.2874999999999996H1.71Z"
                  fill="yellow"
                  strokeWidth={0.75}
                />
                <path
                  d="M0.5700000000000001 19.42875h1.1400000000000001v2.2874999999999996H0.5700000000000001Z"
                  fill="yellow"
                  strokeWidth={0.75}
                />
              </g>
            </svg>
          </div>
        </ScrollBaseAnimation>
      </div>
    </main>
  );
}
