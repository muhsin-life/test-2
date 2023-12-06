import { LocateIcon, Mail, MapPin, PhoneIncoming } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const Footer = () => {
  return (
    <div className="bg-primary py-20">
      <MaxWidthWrapper>
        <div className="grid grid-flow-col justify-stretch">
          <div className="gap-5 flex flex-col ">
            <h4 className="text-xl font-semibold text-white">Contact Us</h4>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row items-start gap-3 ">
                <Mail className="text-white w-5 h-5" />
                <div className="flex flex-col gap-1">
                  <Link
                    href={"#"}
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "text-white p-0 h-fit"
                    )}
                  >
                    info@ikigai.com{" "}
                  </Link>
                  <Link
                    href={"#"}
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "text-white p-0 h-fit"
                    )}
                  >
                    info@ikigai.com{" "}
                  </Link>
                </div>
              </div>
              <div className="flex flex-row items-start gap-3 ">
                <PhoneIncoming className="text-white w-5 h-5" />
                <div className="flex flex-col gap-1 items-start">
                  <Link
                    href={"#"}
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "text-white p-0 h-fit"
                    )}
                  >
                    Call: +971 4 344 1122
                  </Link>
                  <Link
                    href={"#"}
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "text-white p-0 h-fit"
                    )}
                  >
                    Call: +098 765 432 100
                  </Link>
                </div>
              </div>
              <div className="flex flex-row items-start gap-3 ">
                <MapPin className="text-white w-5 h-5" />
                <div className="flex flex-col gap-1 items-start">
                  <Link
                    href={"#"}
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "text-white p-0 h-fit "
                    )}
                  >
                    Lower Ground - 212 - opposite Mall Management office (Grand Parking - Downtown Dubai - Dubai Mall - Dubai
                  </Link>
               
                </div>
              </div>
            </div>
          </div>
          <div className="gap-5 flex flex-col">
            <h4 className="text-xl font-semibold text-white">Contact Us</h4>
            <div className="flex flex-row items-start gap-3 ">
              <Mail className="text-white w-5 h-5" />
              <div className="flex flex-col gap-1">
                <Link
                  href={"#"}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "text-white p-0 h-fit"
                  )}
                >
                  info@ikigai.com{" "}
                </Link>
                <Link
                  href={"#"}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "text-white p-0 h-fit"
                  )}
                >
                  info@ikigai.com{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="gap-5 flex flex-col">
            <h4 className="text-xl font-semibold text-white">Contact Us</h4>
            <div className="flex flex-row items-start gap-3 ">
              <PhoneIncoming className="text-white w-5 h-5" />
              <div className="flex flex-col gap-1">
                <Link
                  href={"#"}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "text-white p-0 h-fit"
                  )}
                >
                  info@ikigai.com{" "}
                </Link>
                <Link
                  href={"#"}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "text-white p-0 h-fit"
                  )}
                >
                  info@ikigai.com{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
