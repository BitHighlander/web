import { Button, Icon, ModalBody, ModalHeader, Text as CText } from '@chakra-ui/react'
import { useMemo } from 'react'
import { FaApple, FaLinux, FaWindows } from 'react-icons/fa'
import { Text } from 'components/Text'
import type { TextPropTypes } from 'components/Text/Text'

import { getPlatform, RELEASE_PAGE, UPDATER_BASE_URL } from '../helpers'

export const KeepKeyDownloadUpdaterApp = () => {
  const platform = useMemo(() => getPlatform(), [])

  const platformFilename = useMemo(() => {
    switch (platform) {
      case 'Mac OS':
        return 'KeepKey-Updater-2.1.4.dmg'
      case 'Windows':
        return 'KeepKey-Updater-Setup-2.1.4.exe'
      case 'Linux':
        return 'KeepKey-Updater-2.1.4.AppImage'
      default:
        return null
    }
  }, [platform])

  const platformIcon = useMemo(() => {
    switch (platform) {
      case 'Mac OS':
        return FaApple
      case 'Windows':
        return FaWindows
      case 'Linux':
        return FaLinux
      default:
        return null
    }
  }, [platform])

  const wrongPlatformTranslation: TextPropTypes['translation'] = useMemo(
    () => ['modals.keepKey.downloadUpdater.wrongPlatform', { platform }],
    [platform],
  )

  const downloadUpdaterTranslation: TextPropTypes['translation'] = useMemo(
    () => [
      'modals.keepKey.downloadUpdater.button',
      { filename: platformFilename || 'Updater App' },
    ],
    [platformFilename],
  )

  const handleDownload = (url: string) => {
    // Create a temporary link element
    const link = document.createElement('a')
    link.href = url
    link.download = platformFilename || 'KeepKey-Updater'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const updaterUrl = platformFilename ? `${UPDATER_BASE_URL}${platformFilename}` : RELEASE_PAGE

  return (
    <>
      <ModalHeader textAlign='center'>
        <Text translation={'modals.keepKey.downloadUpdater.header'} />
      </ModalHeader>
      <ModalBody textAlign='center'>
        {platformIcon && <Icon as={platformIcon} boxSize={20} mb={4} color='white' />}
        {platform && (
          <>
            <CText fontWeight='bold'>{platform}</CText>
            <Button variant='link' onClick={() => handleDownload(RELEASE_PAGE)} mb={2}>
              <Text color='text.subtle' translation={wrongPlatformTranslation} />
            </Button>
          </>
        )}
        <Button width='full' onClick={() => handleDownload(updaterUrl)} colorScheme='blue' mt={2}>
          <Text translation={downloadUpdaterTranslation} />
        </Button>
      </ModalBody>
    </>
  )
}
