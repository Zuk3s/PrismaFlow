'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  CalendarDays,
  ChevronDown,
  Clock,
  Edit,
  Info,
  Plus,
  Settings,
  Trash2,
  Users,
  X,
} from 'lucide-react'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export default function ProjectPage() {
  const params = useParams()
  const projectId = params.id as string

  // Dados de exemplo do projeto
  const project = {
    id: projectId,
    name: 'Redesign do Website',
    description:
      'Redesenhar o site da empresa com um visual moderno e atrativo',
    progress: 75,
    status: 'Em andamento',
    dueDate: '15 de Outubro de 2023',
    members: [
      {
        id: '1',
        name: 'João Silva',
        avatar: '/placeholder.svg?height=32&width=32',
      },
      {
        id: '2',
        name: 'Maria Souza',
        avatar: '/placeholder.svg?height=32&width=32',
      },
      {
        id: '3',
        name: 'Carlos Pereira',
        avatar: '/placeholder.svg?height=32&width=32',
      },
      {
        id: '4',
        name: 'Ana Oliveira',
        avatar: '/placeholder.svg?height=32&width=32',
      },
      {
        id: '5',
        name: 'Pedro Santos',
        avatar: '/placeholder.svg?height=32&width=32',
      },
    ],
    sprints: [
      {
        id: '1',
        name: 'Sprint 1',
        status: 'Concluída',
        startDate: '1 Ago',
        endDate: '15 Ago',
      },
      {
        id: '2',
        name: 'Sprint 2',
        status: 'Concluída',
        startDate: '16 Ago',
        endDate: '31 Ago',
      },
      {
        id: '3',
        name: 'Sprint 3',
        status: 'Em andamento',
        startDate: '1 Set',
        endDate: '15 Set',
      },
      {
        id: '4',
        name: 'Sprint 4',
        status: 'Planejada',
        startDate: '16 Set',
        endDate: '30 Set',
      },
    ],
  }

  const [activeTab, setActiveTab] = useState('board')
  const [activeSprint, setActiveSprint] = useState('3') // Sprint 3 ativa
  const [members, setMembers] = useState(project.members)

  // Função para remover um membro
  const removeMember = (id: string) => {
    setMembers(members.filter(member => member.id !== id))
  }

  return (
    <>
      {/* Cabeçalho do Projeto */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {project.description}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm">
                <Info className="mr-2 h-4 w-4" />
                Visão Geral
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md overflow-y-auto">
              <SheetHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <SheetTitle className="text-xl font-semibold">
                    Visão Geral do Projeto
                  </SheetTitle>
                </div>
              </SheetHeader>
              <div className="space-y-6 px-5">
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Descrição</h3>
                  <p className="text-muted-foreground text-sm">
                    Este projeto tem como objetivo redesenhar o site da empresa
                    com um visual moderno e atrativo. O novo design será
                    responsivo, acessível e otimizado para performance. Também
                    iremos melhorar a experiência do usuário e adicionar novas
                    funcionalidades para aumentar o engajamento.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Objetivos</h3>
                  <ul className="list-disc pl-5 text-muted-foreground text-sm">
                    <li>Melhorar a experiência e o engajamento do usuário</li>
                    <li>Aumentar a taxa de conversão em 20%</li>
                    <li>Reduzir a taxa de rejeição em 15%</li>
                    <li>Garantir conformidade com acessibilidade</li>
                    <li>Otimizar para dispositivos móveis</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Equipe</h3>
                  <div className="space-y-2">
                    {members.map(member => (
                      <div key={member.id} className="flex items-center gap-2">
                        <img
                          src={member.avatar || '/placeholder.svg'}
                          alt={member.name}
                          className="h-6 w-6 rounded-full"
                        />
                        <span className="text-sm">{member.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Button variant="outline" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Configurações
          </Button>
        </div>
      </div>

      <Tabs defaultValue="board" className="space-y-6">
        <TabsList>
          <TabsTrigger value="board">Quadro</TabsTrigger>
          <TabsTrigger value="backlog">Backlog</TabsTrigger>
          <TabsTrigger value="analytics">Análise</TabsTrigger>
          <TabsTrigger value="team">Equipe</TabsTrigger>
        </TabsList>

        {/* Aba Quadros */}
        <TabsContent value="board" className="space-y-6">
          <div>Quadro do projeto</div>
        </TabsContent>

        {/* Aba Backlog */}
        <TabsContent value="backlog" className="space-y-6">
          <div>Backlog do projeto</div>
        </TabsContent>

        {/* Aba Análise */}
        <TabsContent value="analytics" className="space-y-6">
          <div>Análise do projeto</div>
        </TabsContent>

        {/* Aba Equipe */}
        <TabsContent value="team" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl">Membros da Equipe</CardTitle>
                <CardDescription>
                  Gerencie os membros da equipe e seus papéis
                </CardDescription>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Adicionar Membro
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {members.map(member => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={member.avatar || '/placeholder.svg'}
                        alt={member.name}
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-medium">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {member.id === '1'
                            ? 'Gerente de Projeto'
                            : 'Membro da Equipe'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeMember(member.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  )
}
