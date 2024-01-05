# `dataKubernetesPersistentVolumeClaim` Submodule <a name="`dataKubernetesPersistentVolumeClaim` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesPersistentVolumeClaim <a name="DataKubernetesPersistentVolumeClaim" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/persistent_volume_claim kubernetes_persistent_volume_claim}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaim } from '@cdktf/provider-kubernetes'

new dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim(scope: Construct, id: string, config: DataKubernetesPersistentVolumeClaimConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig">DataKubernetesPersistentVolumeClaimConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig">DataKubernetesPersistentVolumeClaimConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.resetSpec">resetSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.putMetadata"></a>

```typescript
public putMetadata(value: DataKubernetesPersistentVolumeClaimMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata">DataKubernetesPersistentVolumeClaimMetadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.putSpec"></a>

```typescript
public putSpec(value: IResolvable | DataKubernetesPersistentVolumeClaimSpec[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.putSpec.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec">DataKubernetesPersistentVolumeClaimSpec</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSpec` <a name="resetSpec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.resetSpec"></a>

```typescript
public resetSpec(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataKubernetesPersistentVolumeClaim resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isConstruct"></a>

```typescript
import { dataKubernetesPersistentVolumeClaim } from '@cdktf/provider-kubernetes'

dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isTerraformElement"></a>

```typescript
import { dataKubernetesPersistentVolumeClaim } from '@cdktf/provider-kubernetes'

dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isTerraformDataSource"></a>

```typescript
import { dataKubernetesPersistentVolumeClaim } from '@cdktf/provider-kubernetes'

dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.generateConfigForImport"></a>

```typescript
import { dataKubernetesPersistentVolumeClaim } from '@cdktf/provider-kubernetes'

dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataKubernetesPersistentVolumeClaim resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataKubernetesPersistentVolumeClaim to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataKubernetesPersistentVolumeClaim that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/persistent_volume_claim#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataKubernetesPersistentVolumeClaim to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference">DataKubernetesPersistentVolumeClaimMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList">DataKubernetesPersistentVolumeClaimSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata">DataKubernetesPersistentVolumeClaimMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.specInput">specInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec">DataKubernetesPersistentVolumeClaimSpec</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.metadata"></a>

```typescript
public readonly metadata: DataKubernetesPersistentVolumeClaimMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference">DataKubernetesPersistentVolumeClaimMetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.spec"></a>

```typescript
public readonly spec: DataKubernetesPersistentVolumeClaimSpecList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList">DataKubernetesPersistentVolumeClaimSpecList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.metadataInput"></a>

```typescript
public readonly metadataInput: DataKubernetesPersistentVolumeClaimMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata">DataKubernetesPersistentVolumeClaimMetadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.specInput"></a>

```typescript
public readonly specInput: IResolvable | DataKubernetesPersistentVolumeClaimSpec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec">DataKubernetesPersistentVolumeClaimSpec</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesPersistentVolumeClaimConfig <a name="DataKubernetesPersistentVolumeClaimConfig" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaim } from '@cdktf/provider-kubernetes'

const dataKubernetesPersistentVolumeClaimConfig: dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata">DataKubernetesPersistentVolumeClaimMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/persistent_volume_claim#id DataKubernetesPersistentVolumeClaim#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.spec">spec</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec">DataKubernetesPersistentVolumeClaimSpec</a>[]</code> | spec block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.metadata"></a>

```typescript
public readonly metadata: DataKubernetesPersistentVolumeClaimMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata">DataKubernetesPersistentVolumeClaimMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/persistent_volume_claim#metadata DataKubernetesPersistentVolumeClaim#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/persistent_volume_claim#id DataKubernetesPersistentVolumeClaim#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.spec"></a>

```typescript
public readonly spec: IResolvable | DataKubernetesPersistentVolumeClaimSpec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec">DataKubernetesPersistentVolumeClaimSpec</a>[]

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/persistent_volume_claim#spec DataKubernetesPersistentVolumeClaim#spec}

---

### DataKubernetesPersistentVolumeClaimMetadata <a name="DataKubernetesPersistentVolumeClaimMetadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaim } from '@cdktf/provider-kubernetes'

const dataKubernetesPersistentVolumeClaimMetadata: dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.generateName">generateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.name">name</a></code> | <code>string</code> | Name of the persistent volume claim, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the persistent volume claim must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/persistent_volume_claim#annotations DataKubernetesPersistentVolumeClaim#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/persistent_volume_claim#generate_name DataKubernetesPersistentVolumeClaim#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/persistent_volume_claim#labels DataKubernetesPersistentVolumeClaim#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the persistent volume claim, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/persistent_volume_claim#name DataKubernetesPersistentVolumeClaim#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the space within which name of the persistent volume claim must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/persistent_volume_claim#namespace DataKubernetesPersistentVolumeClaim#namespace}

---

### DataKubernetesPersistentVolumeClaimSpec <a name="DataKubernetesPersistentVolumeClaimSpec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaim } from '@cdktf/provider-kubernetes'

const dataKubernetesPersistentVolumeClaimSpec: dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.property.selector">selector</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector">DataKubernetesPersistentVolumeClaimSpecSelector</a>[]</code> | selector block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.property.storageClassName">storageClassName</a></code> | <code>string</code> | Name of the storage class requested by the claim. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.property.volumeMode">volumeMode</a></code> | <code>string</code> | Defines what type of volume is required by the claim. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.property.volumeName">volumeName</a></code> | <code>string</code> | The binding reference to the PersistentVolume backing this claim. |

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.property.selector"></a>

```typescript
public readonly selector: IResolvable | DataKubernetesPersistentVolumeClaimSpecSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector">DataKubernetesPersistentVolumeClaimSpecSelector</a>[]

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/persistent_volume_claim#selector DataKubernetesPersistentVolumeClaim#selector}

---

##### `storageClassName`<sup>Optional</sup> <a name="storageClassName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.property.storageClassName"></a>

```typescript
public readonly storageClassName: string;
```

- *Type:* string

Name of the storage class requested by the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/persistent_volume_claim#storage_class_name DataKubernetesPersistentVolumeClaim#storage_class_name}

---

##### `volumeMode`<sup>Optional</sup> <a name="volumeMode" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.property.volumeMode"></a>

```typescript
public readonly volumeMode: string;
```

- *Type:* string

Defines what type of volume is required by the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/persistent_volume_claim#volume_mode DataKubernetesPersistentVolumeClaim#volume_mode}

---

##### `volumeName`<sup>Optional</sup> <a name="volumeName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

The binding reference to the PersistentVolume backing this claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/persistent_volume_claim#volume_name DataKubernetesPersistentVolumeClaim#volume_name}

---

### DataKubernetesPersistentVolumeClaimSpecResources <a name="DataKubernetesPersistentVolumeClaimSpecResources" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResources.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaim } from '@cdktf/provider-kubernetes'

const dataKubernetesPersistentVolumeClaimSpecResources: dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResources = { ... }
```


### DataKubernetesPersistentVolumeClaimSpecSelector <a name="DataKubernetesPersistentVolumeClaimSpecSelector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaim } from '@cdktf/provider-kubernetes'

const dataKubernetesPersistentVolumeClaimSpecSelector: dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector.property.matchExpressions">matchExpressions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: IResolvable | DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/persistent_volume_claim#match_expressions DataKubernetesPersistentVolumeClaim#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/persistent_volume_claim#match_labels DataKubernetesPersistentVolumeClaim#match_labels}

---

### DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions <a name="DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaim } from '@cdktf/provider-kubernetes'

const dataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions: dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions.property.operator">operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions.property.values">values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/persistent_volume_claim#key DataKubernetesPersistentVolumeClaim#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/persistent_volume_claim#operator DataKubernetesPersistentVolumeClaim#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/data-sources/persistent_volume_claim#values DataKubernetesPersistentVolumeClaim#values}

---

## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesPersistentVolumeClaimMetadataOutputReference <a name="DataKubernetesPersistentVolumeClaimMetadataOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaim } from '@cdktf/provider-kubernetes'

new dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetGenerateName"></a>

```typescript
public resetGenerateName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.generateName">generateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata">DataKubernetesPersistentVolumeClaimMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.generateNameInput"></a>

```typescript
public readonly generateNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataKubernetesPersistentVolumeClaimMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata">DataKubernetesPersistentVolumeClaimMetadata</a>

---


### DataKubernetesPersistentVolumeClaimSpecList <a name="DataKubernetesPersistentVolumeClaimSpecList" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaim } from '@cdktf/provider-kubernetes'

new dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.get"></a>

```typescript
public get(index: number): DataKubernetesPersistentVolumeClaimSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec">DataKubernetesPersistentVolumeClaimSpec</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataKubernetesPersistentVolumeClaimSpec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec">DataKubernetesPersistentVolumeClaimSpec</a>[]

---


### DataKubernetesPersistentVolumeClaimSpecOutputReference <a name="DataKubernetesPersistentVolumeClaimSpecOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaim } from '@cdktf/provider-kubernetes'

new dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.putSelector">putSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resetSelector">resetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resetStorageClassName">resetStorageClassName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resetVolumeMode">resetVolumeMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resetVolumeName">resetVolumeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelector` <a name="putSelector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.putSelector"></a>

```typescript
public putSelector(value: IResolvable | DataKubernetesPersistentVolumeClaimSpecSelector[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.putSelector.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector">DataKubernetesPersistentVolumeClaimSpecSelector</a>[]

---

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resetSelector"></a>

```typescript
public resetSelector(): void
```

##### `resetStorageClassName` <a name="resetStorageClassName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resetStorageClassName"></a>

```typescript
public resetStorageClassName(): void
```

##### `resetVolumeMode` <a name="resetVolumeMode" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resetVolumeMode"></a>

```typescript
public resetVolumeMode(): void
```

##### `resetVolumeName` <a name="resetVolumeName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resetVolumeName"></a>

```typescript
public resetVolumeName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.accessModes">accessModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList">DataKubernetesPersistentVolumeClaimSpecResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList">DataKubernetesPersistentVolumeClaimSpecSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.selectorInput">selectorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector">DataKubernetesPersistentVolumeClaimSpecSelector</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.storageClassNameInput">storageClassNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.volumeModeInput">volumeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.volumeNameInput">volumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.storageClassName">storageClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.volumeMode">volumeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.volumeName">volumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec">DataKubernetesPersistentVolumeClaimSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessModes`<sup>Required</sup> <a name="accessModes" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.accessModes"></a>

```typescript
public readonly accessModes: string[];
```

- *Type:* string[]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.resources"></a>

```typescript
public readonly resources: DataKubernetesPersistentVolumeClaimSpecResourcesList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList">DataKubernetesPersistentVolumeClaimSpecResourcesList</a>

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.selector"></a>

```typescript
public readonly selector: DataKubernetesPersistentVolumeClaimSpecSelectorList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList">DataKubernetesPersistentVolumeClaimSpecSelectorList</a>

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.selectorInput"></a>

```typescript
public readonly selectorInput: IResolvable | DataKubernetesPersistentVolumeClaimSpecSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector">DataKubernetesPersistentVolumeClaimSpecSelector</a>[]

---

##### `storageClassNameInput`<sup>Optional</sup> <a name="storageClassNameInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.storageClassNameInput"></a>

```typescript
public readonly storageClassNameInput: string;
```

- *Type:* string

---

##### `volumeModeInput`<sup>Optional</sup> <a name="volumeModeInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.volumeModeInput"></a>

```typescript
public readonly volumeModeInput: string;
```

- *Type:* string

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.volumeNameInput"></a>

```typescript
public readonly volumeNameInput: string;
```

- *Type:* string

---

##### `storageClassName`<sup>Required</sup> <a name="storageClassName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.storageClassName"></a>

```typescript
public readonly storageClassName: string;
```

- *Type:* string

---

##### `volumeMode`<sup>Required</sup> <a name="volumeMode" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.volumeMode"></a>

```typescript
public readonly volumeMode: string;
```

- *Type:* string

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataKubernetesPersistentVolumeClaimSpec;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec">DataKubernetesPersistentVolumeClaimSpec</a>

---


### DataKubernetesPersistentVolumeClaimSpecResourcesList <a name="DataKubernetesPersistentVolumeClaimSpecResourcesList" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaim } from '@cdktf/provider-kubernetes'

new dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.get"></a>

```typescript
public get(index: number): DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference <a name="DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaim } from '@cdktf/provider-kubernetes'

new dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.limits">limits</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.requests">requests</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResources">DataKubernetesPersistentVolumeClaimSpecResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.limits"></a>

```typescript
public readonly limits: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.requests"></a>

```typescript
public readonly requests: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataKubernetesPersistentVolumeClaimSpecResources;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResources">DataKubernetesPersistentVolumeClaimSpecResources</a>

---


### DataKubernetesPersistentVolumeClaimSpecSelectorList <a name="DataKubernetesPersistentVolumeClaimSpecSelectorList" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaim } from '@cdktf/provider-kubernetes'

new dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.get"></a>

```typescript
public get(index: number): DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector">DataKubernetesPersistentVolumeClaimSpecSelector</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataKubernetesPersistentVolumeClaimSpecSelector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector">DataKubernetesPersistentVolumeClaimSpecSelector</a>[]

---


### DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList <a name="DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaim } from '@cdktf/provider-kubernetes'

new dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.get"></a>

```typescript
public get(index: number): DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions</a>[]

---


### DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference <a name="DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaim } from '@cdktf/provider-kubernetes'

new dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions</a>

---


### DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference <a name="DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer"></a>

```typescript
import { dataKubernetesPersistentVolumeClaim } from '@cdktf/provider-kubernetes'

new dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.putMatchExpressions"></a>

```typescript
public putMatchExpressions(value: IResolvable | DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions</a>[]

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.resetMatchExpressions"></a>

```typescript
public resetMatchExpressions(): void
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.resetMatchLabels"></a>

```typescript
public resetMatchLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector">DataKubernetesPersistentVolumeClaimSpecSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchExpressionsInput"></a>

```typescript
public readonly matchExpressionsInput: IResolvable | DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions</a>[]

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchLabelsInput"></a>

```typescript
public readonly matchLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataKubernetesPersistentVolumeClaimSpecSelector;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector">DataKubernetesPersistentVolumeClaimSpecSelector</a>

---



