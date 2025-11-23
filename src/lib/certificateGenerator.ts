import { jsPDF } from 'jspdf';
import type { Course } from '@/types/course';

export interface CertificateData {
  courseId: string;
  courseName: string;
  userName: string;
  completionDate: string;
  duration: string;
  category: string;
}

export const generateCertificate = (course: Course, userName: string): void => {
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4'
  });

  const width = pdf.internal.pageSize.getWidth();
  const height = pdf.internal.pageSize.getHeight();

  // Background
  pdf.setFillColor(248, 250, 252);
  pdf.rect(0, 0, width, height, 'F');

  // Border
  pdf.setDrawColor(59, 130, 246);
  pdf.setLineWidth(2);
  pdf.rect(10, 10, width - 20, height - 20);

  // Inner border
  pdf.setDrawColor(147, 197, 253);
  pdf.setLineWidth(0.5);
  pdf.rect(15, 15, width - 30, height - 30);

  // Title
  pdf.setFontSize(48);
  pdf.setTextColor(30, 58, 138);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Certificate of Completion', width / 2, 40, { align: 'center' });

  // Subtitle
  pdf.setFontSize(14);
  pdf.setTextColor(71, 85, 105);
  pdf.setFont('helvetica', 'normal');
  pdf.text('This is to certify that', width / 2, 55, { align: 'center' });

  // User name
  pdf.setFontSize(32);
  pdf.setTextColor(15, 23, 42);
  pdf.setFont('helvetica', 'bold');
  pdf.text(userName, width / 2, 75, { align: 'center' });

  // Achievement text
  pdf.setFontSize(14);
  pdf.setTextColor(71, 85, 105);
  pdf.setFont('helvetica', 'normal');
  pdf.text('has successfully completed the course', width / 2, 90, { align: 'center' });

  // Course name
  pdf.setFontSize(24);
  pdf.setTextColor(59, 130, 246);
  pdf.setFont('helvetica', 'bold');
  pdf.text(course.title, width / 2, 110, { align: 'center' });

  // Course details
  pdf.setFontSize(12);
  pdf.setTextColor(71, 85, 105);
  pdf.setFont('helvetica', 'normal');
  pdf.text(`Category: ${course.category} | Duration: ${course.duration} | Level: ${course.level}`, width / 2, 125, { align: 'center' });

  // Completion date
  const completionDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  pdf.setFontSize(12);
  pdf.text(`Completed on: ${completionDate}`, width / 2, 140, { align: 'center' });

  // Signature line
  pdf.setLineWidth(0.5);
  pdf.setDrawColor(148, 163, 184);
  pdf.line(width / 2 - 30, 165, width / 2 + 30, 165);
  
  pdf.setFontSize(10);
  pdf.setTextColor(100, 116, 139);
  pdf.text('Atha Rasyid', width / 2, 172, { align: 'center' });
  pdf.text('Course Instructor', width / 2, 178, { align: 'center' });

  // Save PDF
  const fileName = `Certificate_${course.title.replace(/\s+/g, '_')}_${Date.now()}.pdf`;
  pdf.save(fileName);
};

// Store certificate generation record
export const saveCertificateRecord = (certificateData: CertificateData): void => {
  const records = getCertificateRecords();
  records.push({
    ...certificateData,
    generatedAt: Date.now()
  });
  localStorage.setItem('course_certificates', JSON.stringify(records));
};

export const getCertificateRecords = (): (CertificateData & { generatedAt: number })[] => {
  try {
    const data = localStorage.getItem('course_certificates');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};
