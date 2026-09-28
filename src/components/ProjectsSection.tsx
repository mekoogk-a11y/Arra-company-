import React, { useState } from 'react';
import { PROJECTS } from '../data/companyData';
import { MapPin, Layers, CheckCircle2, Eye, X, ArrowLeft, Info } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onOpenRfpForProject: (projectName: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenRfpForProject,
}) => {
  const [filter, setFilter] = useState<'all' | 'bridges' | 'roads' | 'water' | 'civil'>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-right max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-black text-[#08321F] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
              <span>معرض الأعمال · PROJECTS & CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-3">
              مشاريع ومجالات البنية التحتية بالسودان
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              نماذج توضيحية تجسد القدرات الهندسية ومجالات التنفيذ التخصصية لشركة اررا في قطاعات الطرق، الجسور، شبكات المياه، والإنشاءات الكبرى داخل ربوع السودان.
            </p>
          </div>

          {/* Transparent Notice Label (adhering strictly to prompt instructions) */}
          <div className="p-3 bg-amber-50/80 border border-amber-200/80 rounded-xl text-right max-w-sm shrink-0">
            <div className="flex items-start gap-2 text-xs text-amber-900 font-semibold">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>المشاريع المعروضة تمثل نماذج لاختصاصات الشركة وتطويرها في السودان.</span>
            </div>
          </div>
        </div>

        {/* Category Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {[
            { id: 'all', label: 'جميع المشاريع' },
            { id: 'bridges', label: 'الجسور والكباري' },
            { id: 'roads', label: 'الطرق والسفلتة' },
            { id: 'water', label: 'شبكات المياه' },
            { id: 'civil', label: 'الهندسة المدنية والمنشآت' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-4 py-2 rounded-lg text-xs font-bold shrink-0 transition-all ${
                filter === cat.id
                  ? 'bg-[#08321F] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Project Image: 100% Sudan Infrastructure */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={`${project.title} - شركة اررا للبنيات التحتية`}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#041A10]/90 via-[#041A10]/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Location Badge on Top Left */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
                  <MapPin className="w-3 h-3 text-[#D4AF37]" />
                  <span>{project.location}</span>
                </div>

                {/* Category label */}
                <div className="absolute bottom-4 right-4 bg-[#08321F]/90 backdrop-blur-md text-[#F3E19C] text-xs font-bold px-3 py-1 rounded-lg border border-[#C5A059]/40">
                  {project.categoryLabel}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between text-right">
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-[#08321F] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Specifications */}
                  {project.specs && (
                    <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-100">
                      {project.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex-1 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-600" />
                    <span>التفاصيل الهندسية</span>
                  </button>

                  <button
                    onClick={() => onOpenRfpForProject(project.title)}
                    className="flex-1 py-2.5 rounded-lg bg-[#08321F] hover:bg-[#062416] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>طلب تنفيذ مماثل</span>
                    <ArrowLeft className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 text-right">
            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full bg-slate-900">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 right-4 bg-[#08321F] text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-[#C5A059]">
                {activeModalProject.categoryLabel}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#9A7B2C]">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>الموقع: {activeModalProject.location}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {activeModalProject.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {activeModalProject.description}
              </p>

              {activeModalProject.specs && (
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  <h4 className="text-xs font-black text-slate-900 mb-2">المواصفات الفنية المعتمدة:</h4>
                  <ul className="space-y-1.5">
                    {activeModalProject.specs.map((spec, idx) => (
                      <li key={idx} className="text-xs text-slate-700 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-3 flex gap-3">
                <button
                  onClick={() => {
                    const title = activeModalProject.title;
                    setActiveModalProject(null);
                    onOpenRfpForProject(title);
                  }}
                  className="flex-1 py-3 rounded-lg bg-[#08321F] hover:bg-[#062416] text-white text-xs font-black shadow-md transition-colors text-center"
                >
                  طلب عرض فني / مالي لهذا النموذج
                </button>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                >
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
