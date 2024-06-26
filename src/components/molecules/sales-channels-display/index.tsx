import React from "react";
import { SalesChannel } from "@medusajs/medusa";

import Tooltip from "../../atoms/tooltip";
import Badge from "../../fundamentals/badge";

type Props = {
  channels?: SalesChannel[];
};

const SalesChannelsDisplay = ({ channels = [] }: Props) => {
  const remainder = Math.max(channels.length - 3, 0);

  return (
    <div className="gap-y-small flex flex-col">
      {channels.length > 0 && (
        <div className="flex gap-x-1">
          <div className="flex max-w-[600px] gap-x-1 overflow-clip">
            {channels.slice(0, 3).map((sc) => (
              <SalesChannelBadge key={sc.id} channel={sc} />
            ))}
          </div>
          {remainder > 0 && (
            <Tooltip
              content={
                <div className="flex flex-col">
                  {channels.slice(3).map((sc) => {
                    return <span key={sc.id}>{sc.name}</span>;
                  })}
                </div>
              }
            >
              <Badge variant="ghost" className="px-3 py-1.5">
                <div className="inter-small-regular text-grey-50 flex h-full items-center">
                  + {remainder} more
                </div>
              </Badge>
            </Tooltip>
          )}
        </div>
      )}
    </div>
  );
};

type SalesChannelBadgeProps = {
  channel: SalesChannel;
};

const SalesChannelBadge: React.FC<SalesChannelBadgeProps> = ({ channel }) => {
  return (
    <Badge variant="ghost" className="px-3 py-1.5">
      <div className="flex items-center">
        <span className="inter-small-regular text-grey-90">{channel.name}</span>
      </div>
    </Badge>
  );
};

export default SalesChannelsDisplay;
