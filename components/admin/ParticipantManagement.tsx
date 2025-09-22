"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { 
  Users, 
  Search, 
  Download, 
  Filter,
  Mail,
  Phone,
  GraduationCap,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Edit,
  Save,
  X
} from "lucide-react";
import { EventWithStats, Participant } from "@/types/events";

interface ParticipantManagementProps {
  events: EventWithStats[];
}

// Mock participants data
const mockParticipants: Participant[] = [
    {
        id: "1",
        eventId: "1",
        name: "John Doe",
        email: "john.doe@vjti.ac.in",
        phone: "+91 9876543210",
        college: "VJTI",
        year: "Third Year",
        branch: "Computer Engineering",
        registeredAt: "2024-01-10T10:00:00Z",
        status: "confirmed"
    },
    {
        id: "2",
        eventId: "1",
        name: "Jane Smith",
        email: "jane.smith@vjti.ac.in",
        phone: "+91 9876543211",
        college: "VJTI",
        year: "Final Year",
        branch: "Information Technology",
        registeredAt: "2024-01-11T14:30:00Z",
        status: "registered"
    },
    {
        id: "3",
        eventId: "2",
        name: "Bob Wilson",
        email: "bob.wilson@vjti.ac.in",
        phone: "+91 9876543212",
        college: "VJTI",
        year: "Second Year",
        branch: "Electronics Engineering",
        registeredAt: "2024-01-12T09:15:00Z",
        status: "confirmed",
        teamName: "Crypto Innovators",
        teamMembers: ["Alice Cooper", "Charlie Brown"]
    }
];

export default function ParticipantManagement({ events }: ParticipantManagementProps) {
  const [participants, setParticipants] = useState<Participant[]>(mockParticipants);
  const [selectedEvent, setSelectedEvent] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedParticipant, setSelectedParticipant] = useState<Participant | null>(null);
  const [editFormData, setEditFormData] = useState<Participant | null>(null);

  const filteredParticipants = useMemo(() => {
    return participants.filter(participant => {
      const matchesEvent = selectedEvent === "all" || participant.eventId === selectedEvent;
      const matchesSearch = participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           participant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           participant.college.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === "all" || participant.status === statusFilter;
      
      return matchesEvent && matchesSearch && matchesStatus;
    });
  }, [participants, selectedEvent, searchTerm, statusFilter]);

  const getEventTitle = (eventId: string) => {
    const event = events.find(e => e.id === eventId);
    return event?.title || "Unknown Event";
  };

  const getStatusColor = (status: Participant['status']) => {
    switch (status) {
      case 'confirmed':
        return 'bg-emerald-500/20 text-emerald-300';
      case 'registered':
        return 'bg-blue-500/20 text-blue-300';
      case 'attended':
        return 'bg-purple-500/20 text-purple-300';
      case 'cancelled':
        return 'bg-red-500/20 text-red-300';
      default:
        return 'bg-gray-500/20 text-gray-300';
    }
  };

  const getStatusIcon = (status: Participant['status']) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="w-4 h-4" />;
      case 'registered':
        return <Clock className="w-4 h-4" />;
      case 'attended':
        return <CheckCircle className="w-4 h-4" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const exportParticipants = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      "Name,Email,Phone,College,Year,Branch,Event,Status,Registered At\n" +
      filteredParticipants.map(p => 
        `"${p.name}","${p.email}","${p.phone}","${p.college}","${p.year}","${p.branch}","${getEventTitle(p.eventId)}","${p.status}","${new Date(p.registeredAt).toLocaleDateString()}"`
      ).join("\n");
    
    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", `participants_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewParticipant = (participant: Participant) => {
    setSelectedParticipant(participant);
    setViewModalOpen(true);
  };

  const handleEditParticipant = (participant: Participant) => {
    setEditFormData({ ...participant });
    setEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    if (editFormData) {
      setParticipants(prev => prev.map(p => 
        p.id === editFormData.id ? editFormData : p
      ));
      setEditModalOpen(false);
      setEditFormData(null);
    }
  };

  const closeModals = () => {
    setViewModalOpen(false);
    setEditModalOpen(false);
    setSelectedParticipant(null);
    setEditFormData(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-neutral-200">Participant Management</h2>
          <p className="text-neutral-400 text-sm mt-1">View and manage event participants</p>
        </div>
        <Button
          onClick={exportParticipants}
          variant="outline"
          className="border-neutral-700 text-neutral-700 hover:bg-neutral-800"
        >
          <Download className="w-4 h-4 mr-2" />
          Export CSV
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-neutral-900/50 border-neutral-800/50">
        <CardHeader>
          <CardTitle className="text-neutral-200 flex items-center space-x-2">
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Event
              </label>
              <select
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
                className="w-full p-2 rounded-md bg-neutral-800/50 border border-neutral-700 text-neutral-200"
              >
                <option value="all">All Events</option>
                {events.map(event => (
                  <option key={event.id} value={event.id}>{event.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full p-2 rounded-md bg-neutral-800/50 border border-neutral-700 text-neutral-200"
              >
                <option value="all">All Statuses</option>
                <option value="registered">Registered</option>
                <option value="confirmed">Confirmed</option>
                <option value="attended">Attended</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
                <Input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search participants..."
                  className="pl-10 bg-neutral-800/50 border-neutral-700 text-neutral-200"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total", value: filteredParticipants.length, color: "blue" },
          { label: "Confirmed", value: filteredParticipants.filter(p => p.status === 'confirmed').length, color: "emerald" },
          { label: "Attended", value: filteredParticipants.filter(p => p.status === 'attended').length, color: "purple" },
          { label: "Cancelled", value: filteredParticipants.filter(p => p.status === 'cancelled').length, color: "red" }
        ].map((stat) => (
          <Card key={stat.label} className="bg-neutral-900/50 border-neutral-800/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-neutral-200">{stat.value}</p>
                </div>
                <Users className={`w-8 h-8 text-${stat.color}-400`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Participants Table */}
      <Card className="bg-neutral-900/50 border-neutral-800/50">
        <CardHeader>
          <CardTitle className="text-neutral-200">
            Participants ({filteredParticipants.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {filteredParticipants.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-neutral-800/50">
                    <TableHead className="text-neutral-400">Participant</TableHead>
                    <TableHead className="text-neutral-400">Contact</TableHead>
                    <TableHead className="text-neutral-400">Academic Info</TableHead>
                    <TableHead className="text-neutral-400">Event</TableHead>
                    <TableHead className="text-neutral-400">Status</TableHead>
                    <TableHead className="text-neutral-400">Registered</TableHead>
                    <TableHead className="text-neutral-400">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredParticipants.map((participant) => (
                    <TableRow key={participant.id} className="border-neutral-800/50 hover:bg-neutral-800/30">
                      <TableCell>
                        <div>
                          <p className="font-medium text-neutral-200">{participant.name}</p>
                          {participant.teamName && (
                            <p className="text-xs text-neutral-400">Team: {participant.teamName}</p>
                          )}
                          {participant.skills && participant.skills.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1">
                              {participant.skills.slice(0, 2).map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-xs bg-neutral-800/50 text-neutral-300">
                                  {skill}
                                </Badge>
                              ))}
                              {participant.skills.length > 2 && (
                                <Badge variant="secondary" className="text-xs bg-neutral-800/50 text-neutral-300">
                                  +{participant.skills.length - 2}
                                </Badge>
                              )}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2 text-sm text-neutral-400">
                            <Mail className="w-3 h-3" />
                            <span>{participant.email}</span>
                          </div>
                          {participant.phone && (
                            <div className="flex items-center space-x-2 text-sm text-neutral-400">
                              <Phone className="w-3 h-3" />
                              <span>{participant.phone}</span>
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2 text-sm text-neutral-400">
                          <GraduationCap className="w-3 h-3" />
                          <div>
                            <p className="text-neutral-300">{participant.college}</p>
                            <p className="text-xs">{participant.year} - {participant.branch}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="text-neutral-300 text-sm">{getEventTitle(participant.eventId)}</p>
                      </TableCell>
                      <TableCell>
                        <Badge className={`${getStatusColor(participant.status)} flex items-center space-x-1`}>
                          {getStatusIcon(participant.status)}
                          <span className="capitalize">{participant.status}</span>
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <p className="text-neutral-400 text-sm">
                          {new Date(participant.registeredAt).toLocaleDateString()}
                        </p>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-1">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-neutral-700 text-neutral-700 hover:bg-neutral-800"
                            onClick={() => handleViewParticipant(participant)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-neutral-700 text-neutral-700 hover:bg-neutral-800"
                            onClick={() => handleEditParticipant(participant)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-12">
              <Users className="w-16 h-16 mx-auto mb-4 text-neutral-600" />
              <h3 className="text-lg font-medium text-neutral-300 mb-2">No participants found</h3>
              <p className="text-neutral-400">
                {selectedEvent === "all" ? "No participants have registered yet" : "No participants for the selected filters"}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* View Participant Modal */}
      <Dialog open={viewModalOpen} onOpenChange={setViewModalOpen}>
        <DialogContent className="max-w-2xl bg-neutral-900/95 border-neutral-800">
          <DialogHeader>
            <DialogTitle className="text-neutral-200">Participant Details</DialogTitle>
          </DialogHeader>
          {selectedParticipant && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-neutral-400">Name</label>
                  <p className="text-neutral-200">{selectedParticipant.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-neutral-400">Email</label>
                  <p className="text-neutral-200">{selectedParticipant.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-neutral-400">Phone</label>
                  <p className="text-neutral-200">{selectedParticipant.phone || 'N/A'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-neutral-400">College</label>
                  <p className="text-neutral-200">{selectedParticipant.college}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-neutral-400">Year</label>
                  <p className="text-neutral-200">{selectedParticipant.year}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-neutral-400">Branch</label>
                  <p className="text-neutral-200">{selectedParticipant.branch}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-neutral-400">Status</label>
                  <Badge className={`${getStatusColor(selectedParticipant.status)} mt-1`}>
                    {selectedParticipant.status}
                  </Badge>
                </div>
              </div>
              
              {selectedParticipant.skills && selectedParticipant.skills.length > 0 && (
                <div>
                  <label className="text-sm font-medium text-neutral-400">Skills</label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {selectedParticipant.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-neutral-800/50 text-neutral-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              {selectedParticipant.teamName && (
                <div>
                  <label className="text-sm font-medium text-neutral-400">Team Information</label>
                  <p className="text-neutral-200">Team: {selectedParticipant.teamName}</p>
                  {selectedParticipant.teamMembers && (
                    <p className="text-neutral-400 text-sm">Members: {selectedParticipant.teamMembers.join(', ')}</p>
                  )}
                </div>
              )}
              
              {selectedParticipant.motivation && (
                <div>
                  <label className="text-sm font-medium text-neutral-400">Motivation</label>
                  <p className="text-neutral-200">{selectedParticipant.motivation}</p>
                </div>
              )}
              
              <div>
                <label className="text-sm font-medium text-neutral-400">Event</label>
                <p className="text-neutral-200">{getEventTitle(selectedParticipant.eventId)}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-neutral-400">Registered At</label>
                <p className="text-neutral-200">{new Date(selectedParticipant.registeredAt).toLocaleString()}</p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={closeModals}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Participant Modal */}
      <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
        <DialogContent className="max-w-2xl bg-neutral-900/95 border-neutral-800">
          <DialogHeader>
            <DialogTitle className="text-neutral-200">Edit Participant</DialogTitle>
          </DialogHeader>
          {editFormData && (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Name</label>
                  <Input
                    value={editFormData.name}
                    onChange={(e) => setEditFormData({...editFormData, name: e.target.value})}
                    className="bg-neutral-800/50 border-neutral-700 text-neutral-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
                  <Input
                    value={editFormData.email}
                    onChange={(e) => setEditFormData({...editFormData, email: e.target.value})}
                    className="bg-neutral-800/50 border-neutral-700 text-neutral-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Phone</label>
                  <Input
                    value={editFormData.phone || ''}
                    onChange={(e) => setEditFormData({...editFormData, phone: e.target.value})}
                    className="bg-neutral-800/50 border-neutral-700 text-neutral-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">College</label>
                  <Input
                    value={editFormData.college}
                    onChange={(e) => setEditFormData({...editFormData, college: e.target.value})}
                    className="bg-neutral-800/50 border-neutral-700 text-neutral-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Year</label>
                  <Input
                    value={editFormData.year}
                    onChange={(e) => setEditFormData({...editFormData, year: e.target.value})}
                    className="bg-neutral-800/50 border-neutral-700 text-neutral-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Branch</label>
                  <Input
                    value={editFormData.branch}
                    onChange={(e) => setEditFormData({...editFormData, branch: e.target.value})}
                    className="bg-neutral-800/50 border-neutral-700 text-neutral-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Experience</label>
                  <select
                    value={editFormData.experience || ''}
                    onChange={(e) => setEditFormData({...editFormData, experience: e.target.value})}
                    className="w-full p-2 rounded-md bg-neutral-800/50 border border-neutral-700 text-neutral-200"
                  >
                    <option value="">Select Experience</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Status</label>
                  <select
                    value={editFormData.status}
                    onChange={(e) => setEditFormData({...editFormData, status: e.target.value as Participant['status']})}
                    className="w-full p-2 rounded-md bg-neutral-800/50 border border-neutral-700 text-neutral-200"
                  >
                    <option value="registered">Registered</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="attended">Attended</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Skills (comma-separated)</label>
                <Input
                  value={editFormData.skills?.join(', ') || ''}
                  onChange={(e) => setEditFormData({...editFormData, skills: e.target.value.split(',').map(s => s.trim()).filter(s => s)})}
                  placeholder="Python, JavaScript, React"
                  className="bg-neutral-800/50 border-neutral-700 text-neutral-200"
                />
              </div>
              
              {editFormData.teamName && (
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Team Name</label>
                  <Input
                    value={editFormData.teamName}
                    onChange={(e) => setEditFormData({...editFormData, teamName: e.target.value})}
                    className="bg-neutral-800/50 border-neutral-700 text-neutral-200"
                  />
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Motivation</label>
                <Textarea
                  value={editFormData.motivation || ''}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setEditFormData({...editFormData, motivation: e.target.value})}
                  className="bg-neutral-800/50 border-neutral-700 text-neutral-200"
                  rows={3}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={closeModals}>
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
            <Button onClick={handleSaveEdit} className="bg-emerald-600 hover:bg-emerald-700">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}