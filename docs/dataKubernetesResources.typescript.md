# `dataKubernetesResources` Submodule <a name="`dataKubernetesResources` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesResources <a name="DataKubernetesResources" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/resources kubernetes_resources}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer"></a>

```typescript
import { dataKubernetesResources } from '@cdktf/provider-kubernetes'

new dataKubernetesResources.DataKubernetesResources(scope: Construct, id: string, config: DataKubernetesResourcesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig">DataKubernetesResourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig">DataKubernetesResourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetFieldSelector">resetFieldSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetLabelSelector">resetLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetObjects">resetObjects</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFieldSelector` <a name="resetFieldSelector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetFieldSelector"></a>

```typescript
public resetFieldSelector(): void
```

##### `resetLabelSelector` <a name="resetLabelSelector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetLabelSelector"></a>

```typescript
public resetLabelSelector(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetObjects` <a name="resetObjects" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetObjects"></a>

```typescript
public resetObjects(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataKubernetesResources resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isConstruct"></a>

```typescript
import { dataKubernetesResources } from '@cdktf/provider-kubernetes'

dataKubernetesResources.DataKubernetesResources.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformElement"></a>

```typescript
import { dataKubernetesResources } from '@cdktf/provider-kubernetes'

dataKubernetesResources.DataKubernetesResources.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformDataSource"></a>

```typescript
import { dataKubernetesResources } from '@cdktf/provider-kubernetes'

dataKubernetesResources.DataKubernetesResources.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport"></a>

```typescript
import { dataKubernetesResources } from '@cdktf/provider-kubernetes'

dataKubernetesResources.DataKubernetesResources.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataKubernetesResources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataKubernetesResources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataKubernetesResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/resources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataKubernetesResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.apiVersionInput">apiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fieldSelectorInput">fieldSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.labelSelectorInput">labelSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.limitInput">limitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.objectsInput">objectsInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.apiVersion">apiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fieldSelector">fieldSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.labelSelector">labelSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.objects">objects</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `apiVersionInput`<sup>Optional</sup> <a name="apiVersionInput" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.apiVersionInput"></a>

```typescript
public readonly apiVersionInput: string;
```

- *Type:* string

---

##### `fieldSelectorInput`<sup>Optional</sup> <a name="fieldSelectorInput" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fieldSelectorInput"></a>

```typescript
public readonly fieldSelectorInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `labelSelectorInput`<sup>Optional</sup> <a name="labelSelectorInput" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.labelSelectorInput"></a>

```typescript
public readonly labelSelectorInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.limitInput"></a>

```typescript
public readonly limitInput: number;
```

- *Type:* number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `objectsInput`<sup>Optional</sup> <a name="objectsInput" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.objectsInput"></a>

```typescript
public readonly objectsInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

---

##### `fieldSelector`<sup>Required</sup> <a name="fieldSelector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fieldSelector"></a>

```typescript
public readonly fieldSelector: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `labelSelector`<sup>Required</sup> <a name="labelSelector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.labelSelector"></a>

```typescript
public readonly labelSelector: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `objects`<sup>Required</sup> <a name="objects" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.objects"></a>

```typescript
public readonly objects: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesResourcesConfig <a name="DataKubernetesResourcesConfig" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.Initializer"></a>

```typescript
import { dataKubernetesResources } from '@cdktf/provider-kubernetes'

const dataKubernetesResourcesConfig: dataKubernetesResources.DataKubernetesResourcesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.apiVersion">apiVersion</a></code> | <code>string</code> | The resource apiVersion. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.kind">kind</a></code> | <code>string</code> | The resource kind. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.fieldSelector">fieldSelector</a></code> | <code>string</code> | A selector to restrict the list of returned objects by their fields. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.labelSelector">labelSelector</a></code> | <code>string</code> | A selector to restrict the list of returned objects by their labels. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.limit">limit</a></code> | <code>number</code> | Limit is a maximum number of responses to return for a list call. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.namespace">namespace</a></code> | <code>string</code> | The resource namespace. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.objects">objects</a></code> | <code>{[ key: string ]: any}</code> | The response from the API server. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

The resource apiVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/resources#api_version DataKubernetesResources#api_version}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

The resource kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/resources#kind DataKubernetesResources#kind}

---

##### `fieldSelector`<sup>Optional</sup> <a name="fieldSelector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.fieldSelector"></a>

```typescript
public readonly fieldSelector: string;
```

- *Type:* string

A selector to restrict the list of returned objects by their fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/resources#field_selector DataKubernetesResources#field_selector}

---

##### `labelSelector`<sup>Optional</sup> <a name="labelSelector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.labelSelector"></a>

```typescript
public readonly labelSelector: string;
```

- *Type:* string

A selector to restrict the list of returned objects by their labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/resources#label_selector DataKubernetesResources#label_selector}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

Limit is a maximum number of responses to return for a list call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/resources#limit DataKubernetesResources#limit}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The resource namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/resources#namespace DataKubernetesResources#namespace}

---

##### `objects`<sup>Optional</sup> <a name="objects" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.objects"></a>

```typescript
public readonly objects: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

The response from the API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/resources#objects DataKubernetesResources#objects}

---



