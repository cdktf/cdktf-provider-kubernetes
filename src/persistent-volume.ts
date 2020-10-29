// https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface PersistentVolumeConfig extends TerraformMetaArguments {
  /** metadata block */
  readonly metadata: PersistentVolumeMetadata[];
  /** spec block */
  readonly spec: PersistentVolumeSpec[];
  /** timeouts block */
  readonly timeouts?: PersistentVolumeTimeouts;
}
export interface PersistentVolumeMetadata {
  /** An unstructured key value map stored with the persistent volume that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the persistent volume, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
}
export interface PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`. */
  readonly operator: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}
export interface PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields {
  /** The label key that the selector applies to. */
  readonly key: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`. */
  readonly operator: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}
export interface PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm {
  /** match_expressions block */
  readonly matchExpressions?: PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions[];
  /** match_fields block */
  readonly matchFields?: PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields[];
}
export interface PersistentVolumeSpecNodeAffinityRequired {
  /** node_selector_term block */
  readonly nodeSelectorTerm: PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm[];
}
export interface PersistentVolumeSpecNodeAffinity {
  /** required block */
  readonly required?: PersistentVolumeSpecNodeAffinityRequired[];
}
export interface PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore */
  readonly fsType?: string;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). */
  readonly partition?: number;
  /** Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore */
  readonly readOnly?: boolean;
  /** Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore */
  readonly volumeId: string;
}
export interface PersistentVolumeSpecPersistentVolumeSourceAzureDisk {
  /** Host Caching mode: None, Read Only, Read Write. */
  readonly cachingMode: string;
  /** The URI the data disk in the blob storage */
  readonly dataDiskUri: string;
  /** The Name of the data disk in the blob storage */
  readonly diskName: string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared */
  readonly kind?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
}
export interface PersistentVolumeSpecPersistentVolumeSourceAzureFile {
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
  /** The name of secret that contains Azure Storage Account Name and Key */
  readonly secretName: string;
  /** Share Name */
  readonly shareName: string;
}
export interface PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}
export interface PersistentVolumeSpecPersistentVolumeSourceCephFs {
  /** Monitors is a collection of Ceph monitors More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly monitors: string[];
  /** Used as the mounted root, rather than the full Ceph tree, default is / */
  readonly path?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly readOnly?: boolean;
  /** The path to key ring for User, default is /etc/ceph/user.secret More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly secretFile?: string;
  /** User is the rados user name, default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly user?: string;
  /** secret_ref block */
  readonly secretRef?: PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef[];
}
export interface PersistentVolumeSpecPersistentVolumeSourceCinder {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly fsType?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly readOnly?: boolean;
  /** Volume ID used to identify the volume in Cinder. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly volumeId: string;
}
export interface PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}
export interface PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}
export interface PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}
export interface PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}
export interface PersistentVolumeSpecPersistentVolumeSourceCsi {
  /** the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi */
  readonly driver: string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#csi */
  readonly readOnly?: boolean;
  /** Attributes of the volume to publish. */
  readonly volumeAttributes?: { [key: string]: string };
  /** A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi */
  readonly volumeHandle: string;
  /** controller_expand_secret_ref block */
  readonly controllerExpandSecretRef?: PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef[];
  /** controller_publish_secret_ref block */
  readonly controllerPublishSecretRef?: PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef[];
  /** node_publish_secret_ref block */
  readonly nodePublishSecretRef?: PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef[];
  /** node_stage_secret_ref block */
  readonly nodeStageSecretRef?: PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef[];
}
export interface PersistentVolumeSpecPersistentVolumeSourceFc {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** FC target lun number */
  readonly lun: number;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
  /** FC target worldwide names (WWNs) */
  readonly targetWwNs: string[];
}
export interface PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}
export interface PersistentVolumeSpecPersistentVolumeSourceFlexVolume {
  /** Driver is the name of the driver to use for this volume. */
  readonly driver: string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script. */
  readonly fsType?: string;
  /** Extra command options if any. */
  readonly options?: { [key: string]: string };
  /** Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
  /** secret_ref block */
  readonly secretRef?: PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef[];
}
export interface PersistentVolumeSpecPersistentVolumeSourceFlocker {
  /** Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated */
  readonly datasetName?: string;
  /** UUID of the dataset. This is unique identifier of a Flocker dataset */
  readonly datasetUuid?: string;
}
export interface PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly fsType?: string;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly partition?: number;
  /** Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly pdName: string;
  /** Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly readOnly?: boolean;
}
export interface PersistentVolumeSpecPersistentVolumeSourceGlusterfs {
  /** The endpoint name that details Glusterfs topology. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly endpointsName: string;
  /** The Glusterfs volume path. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly path: string;
  /** Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly readOnly?: boolean;
}
export interface PersistentVolumeSpecPersistentVolumeSourceHostPath {
  /** Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#hostpath */
  readonly path?: string;
  /** Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice */
  readonly type?: string;
}
export interface PersistentVolumeSpecPersistentVolumeSourceIscsi {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#iscsi */
  readonly fsType?: string;
  /** Target iSCSI Qualified Name. */
  readonly iqn: string;
  /** iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp). */
  readonly iscsiInterface?: string;
  /** iSCSI target lun number. */
  readonly lun?: number;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false. */
  readonly readOnly?: boolean;
  /** iSCSI target portal. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
  readonly targetPortal: string;
}
export interface PersistentVolumeSpecPersistentVolumeSourceLocal {
  /** Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#local */
  readonly path?: string;
}
export interface PersistentVolumeSpecPersistentVolumeSourceNfs {
  /** Path that is exported by the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs */
  readonly path: string;
  /** Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#nfs */
  readonly readOnly?: boolean;
  /** Server is the hostname or IP address of the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs */
  readonly server: string;
}
export interface PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** ID that identifies Photon Controller persistent disk */
  readonly pdId: string;
}
export interface PersistentVolumeSpecPersistentVolumeSourceQuobyte {
  /** Group to map volume access to Default is no group */
  readonly group?: string;
  /** Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false. */
  readonly readOnly?: boolean;
  /** Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes */
  readonly registry: string;
  /** User to map volume access to Defaults to serivceaccount user */
  readonly user?: string;
  /** Volume is a string that references an already created Quobyte volume by name. */
  readonly volume: string;
}
export interface PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}
export interface PersistentVolumeSpecPersistentVolumeSourceRbd {
  /** A collection of Ceph monitors. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly cephMonitors: string[];
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#rbd */
  readonly fsType?: string;
  /** Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly keyring?: string;
  /** The rados user name. Default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly radosUser?: string;
  /** The rados image name. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly rbdImage: string;
  /** The rados pool name. Default is rbd. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it. */
  readonly rbdPool?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly readOnly?: boolean;
  /** secret_ref block */
  readonly secretRef?: PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef[];
}
export interface PersistentVolumeSpecPersistentVolumeSourceVsphereVolume {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** Path that identifies vSphere volume vmdk */
  readonly volumePath: string;
}
export interface PersistentVolumeSpecPersistentVolumeSource {
  /** aws_elastic_block_store block */
  readonly awsElasticBlockStore?: PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore[];
  /** azure_disk block */
  readonly azureDisk?: PersistentVolumeSpecPersistentVolumeSourceAzureDisk[];
  /** azure_file block */
  readonly azureFile?: PersistentVolumeSpecPersistentVolumeSourceAzureFile[];
  /** ceph_fs block */
  readonly cephFs?: PersistentVolumeSpecPersistentVolumeSourceCephFs[];
  /** cinder block */
  readonly cinder?: PersistentVolumeSpecPersistentVolumeSourceCinder[];
  /** csi block */
  readonly csi?: PersistentVolumeSpecPersistentVolumeSourceCsi[];
  /** fc block */
  readonly fc?: PersistentVolumeSpecPersistentVolumeSourceFc[];
  /** flex_volume block */
  readonly flexVolume?: PersistentVolumeSpecPersistentVolumeSourceFlexVolume[];
  /** flocker block */
  readonly flocker?: PersistentVolumeSpecPersistentVolumeSourceFlocker[];
  /** gce_persistent_disk block */
  readonly gcePersistentDisk?: PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk[];
  /** glusterfs block */
  readonly glusterfs?: PersistentVolumeSpecPersistentVolumeSourceGlusterfs[];
  /** host_path block */
  readonly hostPath?: PersistentVolumeSpecPersistentVolumeSourceHostPath[];
  /** iscsi block */
  readonly iscsi?: PersistentVolumeSpecPersistentVolumeSourceIscsi[];
  /** local block */
  readonly local?: PersistentVolumeSpecPersistentVolumeSourceLocal[];
  /** nfs block */
  readonly nfs?: PersistentVolumeSpecPersistentVolumeSourceNfs[];
  /** photon_persistent_disk block */
  readonly photonPersistentDisk?: PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk[];
  /** quobyte block */
  readonly quobyte?: PersistentVolumeSpecPersistentVolumeSourceQuobyte[];
  /** rbd block */
  readonly rbd?: PersistentVolumeSpecPersistentVolumeSourceRbd[];
  /** vsphere_volume block */
  readonly vsphereVolume?: PersistentVolumeSpecPersistentVolumeSourceVsphereVolume[];
}
export interface PersistentVolumeSpec {
  /** Contains all ways the volume can be mounted. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#access-modes */
  readonly accessModes: string[];
  /** A description of the persistent volume's resources and capacity. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#capacity */
  readonly capacity: { [key: string]: string };
  /** A list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. */
  readonly mountOptions?: string[];
  /** What happens to a persistent volume when released from its claim. Valid options are Retain (default) and Recycle. Recycling must be supported by the volume plugin underlying this persistent volume. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#recycling-policy */
  readonly persistentVolumeReclaimPolicy?: string;
  /** A description of the persistent volume's class. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#class */
  readonly storageClassName?: string;
  /** Defines if a volume is intended to be used with a formatted filesystem. or to remain in raw block state. */
  readonly volumeMode?: string;
  /** node_affinity block */
  readonly nodeAffinity?: PersistentVolumeSpecNodeAffinity[];
  /** persistent_volume_source block */
  readonly persistentVolumeSource: PersistentVolumeSpecPersistentVolumeSource[];
}
export interface PersistentVolumeTimeouts {
  readonly create?: string;
}

// Resource

export class PersistentVolume extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PersistentVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_persistent_volume',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
    this._spec = config.spec;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: PersistentVolumeMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: PersistentVolumeMetadata[]) {
    this._metadata = value;
  }

  // spec - computed: false, optional: false, required: true
  private _spec: PersistentVolumeSpec[];
  public get spec() {
    return this._spec;
  }
  public set spec(value: PersistentVolumeSpec[]) {
    this._spec = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PersistentVolumeTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: PersistentVolumeTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: this._metadata,
      spec: this._spec,
      timeouts: this._timeouts,
    };
  }
}
