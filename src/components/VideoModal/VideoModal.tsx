import { Modal } from '../Modal';
import type { VideoModalProps } from '../../types';

/**
 * Pre-built video player modal supporting HTML5 video and YouTube/Vimeo embeds.
 */
export function VideoModal({
  isOpen,
  onClose,
  src,
  type = 'video/mp4',
  title,
  autoplay = false,
  controls = true,
  loop = false,
  muted = false,
  radius,
}: VideoModalProps) {
  const isYouTube = type === 'youtube';
  const isVimeo = type === 'vimeo';
  const isEmbed = isYouTube || isVimeo;

  const getEmbedUrl = () => {
    if (isYouTube) {
      // Extract video ID from various YouTube URL formats
      const videoIdMatch = src.match(
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/
      );
      const videoId = videoIdMatch ? videoIdMatch[1] : src;
      return `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&loop=${loop ? 1 : 0}&mute=${muted ? 1 : 0}`;
    }
    if (isVimeo) {
      const vimeoMatch = src.match(/vimeo\.com\/(\d+)/);
      const vimeoId = vimeoMatch ? vimeoMatch[1] : src;
      return `https://player.vimeo.com/video/${vimeoId}?autoplay=${autoplay ? 1 : 0}&loop=${loop ? 1 : 0}&muted=${muted ? 1 : 0}`;
    }
    return src;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" radius={radius}>
      {title && <Modal.Header>{title}</Modal.Header>}
      <Modal.Body scrollable={false}>
        <div className="py-2">
          <div className="relative w-full aspect-video overflow-hidden bg-black shadow-2xl rounded-modalize border border-white/5 group">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10" />

            {isEmbed ? (
              <iframe
                src={getEmbedUrl()}
                className="absolute inset-0 w-full h-full opacity-0 animate-in fade-in duration-700 fill-mode-forwards"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title || 'Video'}
              />
            ) : (
              <video
                className="w-full h-full opacity-0 animate-in fade-in duration-700 fill-mode-forwards"
                controls={controls}
                autoPlay={autoplay}
                loop={loop}
                muted={muted}
              >
                <source src={src} type={type} />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
