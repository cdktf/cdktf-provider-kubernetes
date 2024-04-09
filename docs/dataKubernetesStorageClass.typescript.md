# `dataKubernetesStorageClass` Submodule <a name="`dataKubernetesStorageClass` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesStorageClass <a name="DataKubernetesStorageClass" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class kubernetes_storage_class}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer"></a>

```typescript
import { dataKubernetesStorageClass } from '@cdktf/provider-kubernetes'

new dataKubernetesStorageClass.DataKubernetesStorageClass(scope: Construct, id: string, config: DataKubernetesStorageClassConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig">DataKubernetesStorageClassConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig">DataKubernetesStorageClassConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putAllowedTopologies">putAllowedTopologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetAllowedTopologies">resetAllowedTopologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetAllowVolumeExpansion">resetAllowVolumeExpansion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetReclaimPolicy">resetReclaimPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetVolumeBindingMode">resetVolumeBindingMode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAllowedTopologies` <a name="putAllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putAllowedTopologies"></a>

```typescript
public putAllowedTopologies(value: DataKubernetesStorageClassAllowedTopologies): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putAllowedTopologies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a>

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putMetadata"></a>

```typescript
public putMetadata(value: DataKubernetesStorageClassMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a>

---

##### `resetAllowedTopologies` <a name="resetAllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetAllowedTopologies"></a>

```typescript
public resetAllowedTopologies(): void
```

##### `resetAllowVolumeExpansion` <a name="resetAllowVolumeExpansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetAllowVolumeExpansion"></a>

```typescript
public resetAllowVolumeExpansion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetMountOptions"></a>

```typescript
public resetMountOptions(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetReclaimPolicy` <a name="resetReclaimPolicy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetReclaimPolicy"></a>

```typescript
public resetReclaimPolicy(): void
```

##### `resetVolumeBindingMode` <a name="resetVolumeBindingMode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetVolumeBindingMode"></a>

```typescript
public resetVolumeBindingMode(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataKubernetesStorageClass resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isConstruct"></a>

```typescript
import { dataKubernetesStorageClass } from '@cdktf/provider-kubernetes'

dataKubernetesStorageClass.DataKubernetesStorageClass.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformElement"></a>

```typescript
import { dataKubernetesStorageClass } from '@cdktf/provider-kubernetes'

dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformDataSource"></a>

```typescript
import { dataKubernetesStorageClass } from '@cdktf/provider-kubernetes'

dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.generateConfigForImport"></a>

```typescript
import { dataKubernetesStorageClass } from '@cdktf/provider-kubernetes'

dataKubernetesStorageClass.DataKubernetesStorageClass.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataKubernetesStorageClass resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataKubernetesStorageClass to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataKubernetesStorageClass that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataKubernetesStorageClass to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowedTopologies">allowedTopologies</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference">DataKubernetesStorageClassAllowedTopologiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference">DataKubernetesStorageClassMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.storageProvisioner">storageProvisioner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowedTopologiesInput">allowedTopologiesInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowVolumeExpansionInput">allowVolumeExpansionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.mountOptionsInput">mountOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.reclaimPolicyInput">reclaimPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.volumeBindingModeInput">volumeBindingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowVolumeExpansion">allowVolumeExpansion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.mountOptions">mountOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.reclaimPolicy">reclaimPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.volumeBindingMode">volumeBindingMode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `allowedTopologies`<sup>Required</sup> <a name="allowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowedTopologies"></a>

```typescript
public readonly allowedTopologies: DataKubernetesStorageClassAllowedTopologiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference">DataKubernetesStorageClassAllowedTopologiesOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.metadata"></a>

```typescript
public readonly metadata: DataKubernetesStorageClassMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference">DataKubernetesStorageClassMetadataOutputReference</a>

---

##### `storageProvisioner`<sup>Required</sup> <a name="storageProvisioner" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.storageProvisioner"></a>

```typescript
public readonly storageProvisioner: string;
```

- *Type:* string

---

##### `allowedTopologiesInput`<sup>Optional</sup> <a name="allowedTopologiesInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowedTopologiesInput"></a>

```typescript
public readonly allowedTopologiesInput: DataKubernetesStorageClassAllowedTopologies;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a>

---

##### `allowVolumeExpansionInput`<sup>Optional</sup> <a name="allowVolumeExpansionInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowVolumeExpansionInput"></a>

```typescript
public readonly allowVolumeExpansionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.metadataInput"></a>

```typescript
public readonly metadataInput: DataKubernetesStorageClassMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a>

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.mountOptionsInput"></a>

```typescript
public readonly mountOptionsInput: string[];
```

- *Type:* string[]

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `reclaimPolicyInput`<sup>Optional</sup> <a name="reclaimPolicyInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.reclaimPolicyInput"></a>

```typescript
public readonly reclaimPolicyInput: string;
```

- *Type:* string

---

##### `volumeBindingModeInput`<sup>Optional</sup> <a name="volumeBindingModeInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.volumeBindingModeInput"></a>

```typescript
public readonly volumeBindingModeInput: string;
```

- *Type:* string

---

##### `allowVolumeExpansion`<sup>Required</sup> <a name="allowVolumeExpansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowVolumeExpansion"></a>

```typescript
public readonly allowVolumeExpansion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.mountOptions"></a>

```typescript
public readonly mountOptions: string[];
```

- *Type:* string[]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `reclaimPolicy`<sup>Required</sup> <a name="reclaimPolicy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.reclaimPolicy"></a>

```typescript
public readonly reclaimPolicy: string;
```

- *Type:* string

---

##### `volumeBindingMode`<sup>Required</sup> <a name="volumeBindingMode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.volumeBindingMode"></a>

```typescript
public readonly volumeBindingMode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesStorageClassAllowedTopologies <a name="DataKubernetesStorageClassAllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies.Initializer"></a>

```typescript
import { dataKubernetesStorageClass } from '@cdktf/provider-kubernetes'

const dataKubernetesStorageClassAllowedTopologies: dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies.property.matchLabelExpressions">matchLabelExpressions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>[]</code> | match_label_expressions block. |

---

##### `matchLabelExpressions`<sup>Optional</sup> <a name="matchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies.property.matchLabelExpressions"></a>

```typescript
public readonly matchLabelExpressions: IResolvable | DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>[]

match_label_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#match_label_expressions DataKubernetesStorageClass#match_label_expressions}

---

### DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions <a name="DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions.Initializer"></a>

```typescript
import { dataKubernetesStorageClass } from '@cdktf/provider-kubernetes'

const dataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions: dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions.property.values">values</a></code> | <code>string[]</code> | An array of string values. One value must match the label to be selected. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#key DataKubernetesStorageClass#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values. One value must match the label to be selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#values DataKubernetesStorageClass#values}

---

### DataKubernetesStorageClassConfig <a name="DataKubernetesStorageClassConfig" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.Initializer"></a>

```typescript
import { dataKubernetesStorageClass } from '@cdktf/provider-kubernetes'

const dataKubernetesStorageClassConfig: dataKubernetesStorageClass.DataKubernetesStorageClassConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.allowedTopologies">allowedTopologies</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a></code> | allowed_topologies block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.allowVolumeExpansion">allowVolumeExpansion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the storage class allow volume expand. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#id DataKubernetesStorageClass#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.mountOptions">mountOptions</a></code> | <code>string[]</code> | Persistent Volumes that are dynamically created by a storage class will have the mount options specified. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | The parameters for the provisioner that should create volumes of this storage class. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.reclaimPolicy">reclaimPolicy</a></code> | <code>string</code> | Indicates the type of the reclaim policy. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.volumeBindingMode">volumeBindingMode</a></code> | <code>string</code> | Indicates when volume binding and dynamic provisioning should occur. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.metadata"></a>

```typescript
public readonly metadata: DataKubernetesStorageClassMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#metadata DataKubernetesStorageClass#metadata}

---

##### `allowedTopologies`<sup>Optional</sup> <a name="allowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.allowedTopologies"></a>

```typescript
public readonly allowedTopologies: DataKubernetesStorageClassAllowedTopologies;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a>

allowed_topologies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#allowed_topologies DataKubernetesStorageClass#allowed_topologies}

---

##### `allowVolumeExpansion`<sup>Optional</sup> <a name="allowVolumeExpansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.allowVolumeExpansion"></a>

```typescript
public readonly allowVolumeExpansion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the storage class allow volume expand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#allow_volume_expansion DataKubernetesStorageClass#allow_volume_expansion}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#id DataKubernetesStorageClass#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.mountOptions"></a>

```typescript
public readonly mountOptions: string[];
```

- *Type:* string[]

Persistent Volumes that are dynamically created by a storage class will have the mount options specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#mount_options DataKubernetesStorageClass#mount_options}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The parameters for the provisioner that should create volumes of this storage class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#parameters DataKubernetesStorageClass#parameters}

---

##### `reclaimPolicy`<sup>Optional</sup> <a name="reclaimPolicy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.reclaimPolicy"></a>

```typescript
public readonly reclaimPolicy: string;
```

- *Type:* string

Indicates the type of the reclaim policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#reclaim_policy DataKubernetesStorageClass#reclaim_policy}

---

##### `volumeBindingMode`<sup>Optional</sup> <a name="volumeBindingMode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.volumeBindingMode"></a>

```typescript
public readonly volumeBindingMode: string;
```

- *Type:* string

Indicates when volume binding and dynamic provisioning should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#volume_binding_mode DataKubernetesStorageClass#volume_binding_mode}

---

### DataKubernetesStorageClassMetadata <a name="DataKubernetesStorageClassMetadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.Initializer"></a>

```typescript
import { dataKubernetesStorageClass } from '@cdktf/provider-kubernetes'

const dataKubernetesStorageClassMetadata: dataKubernetesStorageClass.DataKubernetesStorageClassMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the storage class that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the storage class. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.name">name</a></code> | <code>string</code> | Name of the storage class, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the storage class that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#annotations DataKubernetesStorageClass#annotations}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the storage class.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#labels DataKubernetesStorageClass#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the storage class, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/storage_class#name DataKubernetesStorageClass#name}

---

## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList <a name="DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer"></a>

```typescript
import { dataKubernetesStorageClass } from '@cdktf/provider-kubernetes'

new dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.get"></a>

```typescript
public get(index: number): DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>[]

---


### DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference <a name="DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer"></a>

```typescript
import { dataKubernetesStorageClass } from '@cdktf/provider-kubernetes'

new dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>

---


### DataKubernetesStorageClassAllowedTopologiesOutputReference <a name="DataKubernetesStorageClassAllowedTopologiesOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.Initializer"></a>

```typescript
import { dataKubernetesStorageClass } from '@cdktf/provider-kubernetes'

new dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.putMatchLabelExpressions">putMatchLabelExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.resetMatchLabelExpressions">resetMatchLabelExpressions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchLabelExpressions` <a name="putMatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.putMatchLabelExpressions"></a>

```typescript
public putMatchLabelExpressions(value: IResolvable | DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.putMatchLabelExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>[]

---

##### `resetMatchLabelExpressions` <a name="resetMatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.resetMatchLabelExpressions"></a>

```typescript
public resetMatchLabelExpressions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.matchLabelExpressions">matchLabelExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.matchLabelExpressionsInput">matchLabelExpressionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchLabelExpressions`<sup>Required</sup> <a name="matchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.matchLabelExpressions"></a>

```typescript
public readonly matchLabelExpressions: DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList</a>

---

##### `matchLabelExpressionsInput`<sup>Optional</sup> <a name="matchLabelExpressionsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.matchLabelExpressionsInput"></a>

```typescript
public readonly matchLabelExpressionsInput: IResolvable | DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataKubernetesStorageClassAllowedTopologies;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a>

---


### DataKubernetesStorageClassMetadataOutputReference <a name="DataKubernetesStorageClassMetadataOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.Initializer"></a>

```typescript
import { dataKubernetesStorageClass } from '@cdktf/provider-kubernetes'

new dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataKubernetesStorageClassMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a>

---



