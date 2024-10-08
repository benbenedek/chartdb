import React, { forwardRef } from 'react';
import EmptyStateImage from '@/assets/empty_state.png';
import { Label } from '@/components/label/label';
import { cn } from '@/lib/utils';

export interface EmptyStateProps {
    title: string;
    description: string;
}

export const EmptyState = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & EmptyStateProps
>(({ title, description, className }, ref) => (
    <div
        ref={ref}
        className={cn(
            'flex flex-col items-center justify-center space-y-1',
            className
        )}
    >
        <img src={EmptyStateImage} alt="Empty state" className="w-32" />
        <Label className="text-md">{title}</Label>
        <Label className="font-normal text-muted-foreground text-sm">
            {description}
        </Label>
    </div>
));

EmptyState.displayName = 'EmptyState';
