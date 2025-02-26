import React from "react";

interface ListItemProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  value: React.ReactNode;
  isLink?: boolean;
}

const ListItem: React.FC<ListItemProps> = ({ Icon, value, isLink = false }) => {
  return (
    <li className="flex items-center">
      <div className="w-10 h-10 flex items-center justify-center bg-custom-color_5 rounded-full mr-4 flex-shrink-0">
        <Icon className="w-6 h-6 text-white" />
      </div>
      {isLink ? (
        <a
          href={`mailto:${value}`}
          className="text-blue-400 hover:underline ml-1"
        >
          {value}
        </a>
      ) : (
        <span className="w-100 flex ml-1">{value}</span>
      )}
    </li>
  );
};

export default ListItem;