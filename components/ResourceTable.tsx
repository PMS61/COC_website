"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

interface Resource {
  name: string;
  type: string;
  link: string;
  description: string;
  tags: string[];
}

interface ResourceTableProps {
  category: string;
  domain: string;
}

export default function ResourceTable({ category, domain }: ResourceTableProps) {
  const [resources, setResources] = useState<Resource[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/resources/${domain}`);
        if (!response.ok) {
          throw new Error('Failed to fetch resources');
        }
        const data = await response.json();
        
        // Get resources for the specific category from the nested structure
        const categoryResources = data[category] || [];
        setResources(categoryResources);
      } catch (err) {
        console.error('Error:', err);
        setError('Failed to load resources');
      } finally {
        setIsLoading(false);
      }
    };

    fetchResources();
  }, [category, domain]);

  if (isLoading) return <div className="p-8 text-center text-neutral-400">Loading resources...</div>;
  if (error) return <div className="p-8 text-center text-red-400">{error}</div>;
  if (!resources.length) return <div className="p-8 text-center text-neutral-400">No resources found.</div>;

  return (
    <Table>
      <TableHeader className="bg-neutral-900/50">
        <TableRow className="border-neutral-800/50 hover:bg-transparent">
          <TableHead className="text-neutral-400">Name</TableHead>
          <TableHead className="text-neutral-400">Description</TableHead>
          <TableHead className="text-neutral-400">Tags</TableHead>
          <TableHead className="text-neutral-400 text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {resources.map((resource, index) => (
          <TableRow 
            key={`${resource.name}-${index}`}
            className="border-neutral-800/50 hover:bg-neutral-800/50 transition-colors"
          >
            <TableCell className="font-medium text-neutral-200">
              {resource.name}
            </TableCell>
            <TableCell className="text-neutral-400">
              {resource.description}
            </TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-2">
                {resource.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-md bg-neutral-800/50 text-neutral-300 ring-1 ring-neutral-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </TableCell>
            <TableCell className="text-right">
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-400 hover:bg-emerald-500/10 hover:text-emerald-400"
                onClick={() => window.open(resource.link, '_blank')}
              >
                <ExternalLink className="w-4 h-4" />
                <span className="sr-only">Open link</span>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
